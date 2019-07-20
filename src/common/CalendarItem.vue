<template>
  <div class="calendar-item">
    <div v-for="item in days" :key="`${item.month}${item.day}`" class="day">{{item.day}}</div>
  </div>
</template>

<script>
import { getMonthDays } from '../utils/calendar.js'

const now = new Date()

export default {
  props: {
    year: {
      type: Number,
      default: now.getFullYear()
    },
    month: {
      type: Number,
      default: now.getMonth() + 1
    }
  },
  data() {
    return {
      days: getMonthDays({ year: this.year, month: this.month })
    }
  },
  mounted() {
    console.log(this.days)
  }
}
</script>

<style lang="scss" scoped>
.calendar-item {
  width: 420px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
