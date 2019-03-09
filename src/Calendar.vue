<template>
  <div>

  </div>
</template>

<script>
import calendar from './calendar.js'

export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    weeks: {
      type: Array,
      default: () => ['日', '一', '二', '三', '四', '五', '六']
    },
    months: {
      type: Array,
      default: () => ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    range: {
      type: Array,
      default: () => []
    }
  },
  data: {
    years: [],
    yearsShow: false,
    yarn: 0,
    month: 0,
    day: 0,
    days: [],
    multiDays: []
  },
  methods: {
    init() {
      const now = new Date()
      this.year = now.getFullYear()
      this.month = now.getMonth()
      this.day = now.getDate()
      if (this.value.length > 0) {
        const [[year, month, day], [year2, month2, day2]] = this.value
        if (this.range) {
          this.year = year
          this.month = month - 1
          this.day = day
          this.regionBegin = [year, month, day]
          this.regionEnd = [year2, month2, day2]
        } else if (this.multi) {
          this.multiDays = this.value
          this.year = year
          this.month = month - 1
          this.day = day
        } else {
          this.year = year
          this.month = month - 1
          this.day = day
        }
      }
      this.render(this.year, this.month)
    },
    // 渲染日期
    render(y, m) {
      // todo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
