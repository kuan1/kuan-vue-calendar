<template>
  <div>

  </div>
</template>

<script>
import Calendar from './lib/calendar.js'

export default {
  props: {
    // 多选模式
    multi: {
      type: Boolean,
      default: false
    },
    // 范围模式
    range: {
      type: Boolean,
      default: false
    },
    // 选择时间
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
    // 开始选择日期
    begin: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 结束选择日期
    end: {
      type: Array,
      default: function () {
        return []
      }
    },
    disabled: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  data() {
    return {
      years: [],
      yearsShow: false,
      year: 0,
      month: 0,
      day: 0,
      days: [],
      multiDays: [],
      rangeBegin: [],
      rangeEnd: []
    }
  },
  mounted() {
    this.init()
    console.log(this.days)
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
          this.rangeBegin = [year, month, day]
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
      const firstDayOfMonth = new Date(y, m, 1).getDay() // 当月第一天星期
      const lastDateOfMonth = new Date(y, m + 1, 0).getDate() // 当月最后一天日期
      const lastDayOfLastMonth = new Date(y, m, 0).getDate() // 上月最后一天日期
      this.year = y
      const seletSplit = this.value
      let i, line = 0, temp = [], nextMonthPushDays = 1

      for (i = 1; i <= lastDateOfMonth; i++) {
        const day = new Date(y, m, i).getDay()
        let k
        if (!temp[line]) temp[line] = []

        if (i === 1) {
          k = lastDayOfLastMonth - firstDayOfMonth + 1
          for (let j = 0; j < firstDayOfMonth; j++) {
            // console.log("第一行",lunarYear,lunarMonth,lunarValue,lunarInfo)
            temp[line].push(
              { day: k, disabled: true },
            )
            k++;
          }
        }

        // 范围
        if (this.range) {
          const options = { day: i }
          if (this.rangeBegin.length > 0) {
            const beginTime = Number(new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]))
            const endTime = Number(new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]))
            const stepTime = Number(new Date(this.year, this.month, i))
            if (beginTime <= stepTime && endTime >= stepTime) {
              options.selected = true
            }
          }

          if (this.begin.length > 0) {
            let beginTime = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])))
            if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
          }
          if (this.end.length > 0) {
            let endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])))
            if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
          }
          if (this.disabled.length > 0) {
            if (this.disabled.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
              options.disabled = true
            }
          }
          temp[line].push(options)
        } else if (this.multi) { // 多选形式
          let options
          // 判断是否选中
          if (this.value.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
            options = { day: i, selected: true }
          } else {
            options = { day: i, selected: false }
            if (this.begin.length > 0) {
              let beginTime = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])))
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            if (this.end.length > 0) {
              let endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])))
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            if (this.disabled.length > 0) {
              if (this.disabled.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
                options.disabled = true
              }
            }
          }
          temp[line].push(options)
        } else {  // 单选形式
          let now = new Date()
          let nowYear = now.getFullYear()
          let nowMonth = now.getMonth()
          // 匹配上次选中的日期
          if (parseInt(seletSplit[0]) === this.year && parseInt(seletSplit[1]) - 1 === this.month && parseInt(seletSplit[2]) === i) {
            temp[line].push({ day: i, selected: true })
            this.today = [line, temp[line].length - 1]
          } else if (nowYear == this.year && nowMonth == this.month && i == this.day && this.value == "") {
            // 没有默认值的时候显示选中今天日期
            temp[line].push(
              { day: i, selected: true }
            )
            this.today = [line, temp[line].length - 1]
          } else {
            // 普通日期
            let options = Object.assign(
              { day: i, selected: false }
            )
            if (this.begin.length > 0) {
              let beginTime = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])))
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            if (this.end.length > 0) {
              let endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])))
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            if (this.disabled.length > 0) {
              if (this.disabled.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
                options.disabled = true
              }
            }
            temp[line].push(options)
          }
        }
        // 第六行换行
        if (day == 6 && i < lastDateOfMonth) {
          line++
        } else if (i == lastDateOfMonth) {
          let k = 1
          for (let d = day; d < 6; d++) {
            temp[line].push({ day: k, disabled: true })
            k++
          }
          // 下个月除了补充的前几天开始的日期
          nextMonthPushDays = k
        }
      }
      // 如果日历只显示五行，则增加下一月日期
      if (line <= 5 && nextMonthPushDays > 0) {
        for (let i = line + 1; i <= 5; i++) {
          temp[i] = []
          let start = nextMonthPushDays + (i - line - 1) * 7
          for (let d = start; d <= start + 6; d++) {
            console.log(11, k)
            temp[line].push({ day: k, disabled: true })
          }
        }
      }
      this.days = temp
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
