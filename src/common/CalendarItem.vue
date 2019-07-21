<template>
  <div class="calendar-item">
    <div
      v-for="item in days"
      :key="`${item.month}${item.day}`"
      :class="{prev: item.isPre, next: item.isNext, today: item.isNow, active: value.includes(`${item.year}-${fixZero(item.month)}-${fixZero(item.day)}`)}"
      class="day-item"
      @click="itemClick(item)"
    >
      <div class="day">{{item.day}}</div>
    </div>
  </div>
</template>

<script>
import { getMonthDays, nowYear, nowMonth } from '../utils/calendar.js'
import { fixZero, debounce } from '../utils/index.js'

export default {
  props: {
    year: {
      type: Number,
      default: nowYear
    },
    month: {
      type: Number,
      default: nowMonth
    },
    value: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {
      days: getMonthDays({ year: this.year, month: this.month })
    }
  },
  computed: {
  },
  watch: {
    year() {
      this.init()
    },
    month() {
      this.init()
    }
  },
  methods: {
    fixZero,
    init() {
      debounce(() => {
        this.days = getMonthDays({ year: this.year, month: this.month })
      })
    },
    itemClick(item) {
      if (item.isPre || item.isNext) return
      this.$emit('click', `${item.year}-${fixZero(item.month)}-${fixZero(item.day)}`)
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #3f8de2;

.calendar-item {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5px;
}
.day {
  width: 18px;
  height: 20px;
  line-height: 20px;
  border-radius: 2px;
  box-sizing: border-box;
}
.day-item {
  width: 14.2857%;
  text-align: center;
  font-size: 12px;
  height: 28px;
  color: #333;
  line-height: 1;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  &.prev,
  &.next {
    color: #999;
    font-weight: normal;
    cursor: default;
  }
  &.today {
    .day {
      border: 1px solid $main-color;
      color: $main-color;
    }
  }
  &.active {
    .day {
      color: white;
      background: $main-color;
    }
  }
}
</style>
