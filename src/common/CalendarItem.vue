<template>
  <div class="calendar-item">
    <div
      v-for="item in days"
      :key="`${item.month}${item.day}`"
      :class="{prev: item.isPre, next: item.isNext, today: item.isNow, active: isActive(item)}"
      class="day-item"
      @click="itemClick(item)"
    >
      <div class="day">{{item.day}}</div>
    </div>
  </div>
</template>

<script>
import { getMonthDays, nowYear, nowMonth, toDate } from '../utils/calendar.js'
import { fixZero, debounce } from '../utils/index.js'

export default {
  props: {
    mode: {
      validator(value) {
        return ['single', 'multiple', 'range'].includes(value)
      },
      default: 'single'
    },
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
    },
    isActive(item) {
      const { value } = this
      if (['single', 'multiple'].includes(this.mode)) {
        return value.includes(`${item.year}-${fixZero(item.month)}-${fixZero(item.day)}`)
      }
      if (this.mode === 'range') {
        if (!value.length) return false
        let [preSelect, nextSelect] = value
        if (!nextSelect) nextSelect = preSelect
        const itemDate = new Date(item.year, item.month - 1, item.day)
        return itemDate >= toDate(preSelect) && itemDate <= toDate(nextSelect)
      }
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
  width: 22px;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  box-sizing: border-box;
}
.day-item {
  width: 14.2857%;
  text-align: center;
  font-size: 14px;
  height: 28px;
  color: #555;
  line-height: 1;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    .day {
      background: #eef4fc;
    }
  }
  &.prev,
  &.next {
    color: #ccc;
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
