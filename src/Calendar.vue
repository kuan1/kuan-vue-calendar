<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <div @click="yearVisible = !yearVisible" class="header-wrap">
        <div @click.stop="prev" class="btn">＜</div>
        <div class="calendar-title">{{year}}-{{month + 1}}</div>
        <div @click.stop="next" class="btn">＞</div>
      </div>
    </div>
    <div class="row week-panel">
      <div v-for="item in weeks" :key="item " class="cell">
        {{item}}
      </div>
    </div>
    <div class="date-container">
      <div class="row" v-for="(item, index) in days" :key="index">
        <div class="cell" v-for="(it, i) in item" @click.stop="select(index, i, it)" :key="it.day">
          <div :class="{gray: it.gray, disabled: it.disabled, selected: it.selected, 'is-today': it.isToday}" class="date">{{it.day}}</div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="calendar-years" v-if="yearVisible">
        <span v-for="y in years" :key="y" @click="selectYear(y)" :class="{'active':y == year}">{{y}}</span>
      </div>
    </transition>
  </div>
</template>

<script>
// import Calendar from './lib/calendar.js'

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
    disabled: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  data() {
    const now = new Date()
    return {
      currentDate: [now.getFullYear(), now.getMonth(), now.getDate()],
      yearVisible: false,
      today: [],
      year: 0,
      month: 0,
      day: 0,
      days: [],
      multiDays: [],
      rangeBegin: [],
      rangeEnd: []
    }
  },
  computed: {
    years() {
      const years = []
      for (let i = ~~this.year - 10; i < ~~this.year + 10; i++) {
        years.push(i)
      }
      return years
    }
  },
  watch: {
    value() {
      this.render();
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.year = this.currentDate[0]
      this.month = this.currentDate[1]
      this.day = this.currentDate[2]
      if (this.value.length > 0) {
        if (this.range) {
          const [[year, month, day], [year2, month2, day2] = []] = this.value
          this.year = year
          this.month = month - 1
          this.day = day
          this.rangeBegin = [year, month - 1, day]
          this.rangeEnd = [year2, month2 - 1, day2]
        } else if (this.multi) {
          const [[year, month, day]] = this.value
          this.multiDays = this.value
          this.year = year
          this.month = month - 1
          this.day = day
        } else {
          const [year, month, day] = this.value
          this.year = year
          this.month = month - 1
          this.day = day
        }
      }
      this.render(this.year, this.month)
    },
    // 渲染日期
    render(y = this.year, m = this.month) {
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
              { day: k, gray: true },
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
          if (this.disabled.length > 0) {
            if (this.disabled.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
              options.disabled = true
            }
          }
          options.isToday = y === this.currentDate[0] && m === this.currentDate[1] && i === this.currentDate[2]
          temp[line].push(options)
        } else if (this.multi) { // 多选形式
          let options
          // 判断是否选中
          if (this.value.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
            options = { day: i, selected: true }
          } else {
            options = { day: i, selected: false }
            if (this.disabled.length > 0) {
              if (this.disabled.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
                options.disabled = true
              }
            }
          }
          options.isToday = y === this.currentDate[0] && m === this.currentDate[1] && i === this.currentDate[2]
          temp[line].push(options)
        } else {  // 单选形式
          let now = new Date()
          let nowYear = now.getFullYear()
          let nowMonth = now.getMonth()
          // 匹配上次选中的日期
          if (parseInt(seletSplit[0]) === this.year && parseInt(seletSplit[1]) - 1 === this.month && parseInt(seletSplit[2]) === i) {
            temp[line].push({ day: i, selected: true })
            this.today = [line, temp[line].length - 1]
          } else {
            // 普通日期
            let options = Object.assign(
              { day: i, selected: false }
            )
            if (this.disabled.length > 0) {
              if (this.disabled.some(v => { return this.year === v[0] && this.month === v[1] - 1 && i === v[2] })) {
                options.disabled = true
              }
            }
            options.isToday = y === this.currentDate[0] && m === this.currentDate[1] && i === this.currentDate[2]
            temp[line].push(options)
          }
        }
        // 第六行换行
        if (day == 6 && i < lastDateOfMonth) {
          line++
        } else if (i == lastDateOfMonth) {
          let k = 1
          for (let d = day; d < 6; d++) {
            temp[line].push({ day: k, gray: true })
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
            temp[line].push({ day: d, gray: true })
          }
        }
      }
      this.days = temp
    },
    select(k1, k2, item) {
      if (item.disabled || item.gray) return
      // 日期范围
      if (this.range) {
        if (this.rangeBegin.length == 0 || this.rangeEndTemp != 0) {
          this.rangeBegin = [this.year, this.month, this.days[k1][k2].day]
          this.rangeBeginTemp = this.rangeBegin
          this.rangeEnd = [this.year, this.month, this.days[k1][k2].day]
          this.rangeEndTemp = 0
        } else {
          this.rangeEnd = [this.year, this.month, this.days[k1][k2].day]
          this.rangeEndTemp = 1
          // 判断结束日期小于开始日期则自动颠倒过来
          if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
            this.rangeBegin = this.rangeEnd
            this.rangeEnd = this.rangeBeginTemp
          }
          // 小于10左边打补丁
          let begin = []
          let end = []
          if (this.zero) {
            this.rangeBegin.forEach((v, k) => {
              if (k == 1) v = v + 1
              begin.push(this.zeroPad(v))
            })
            this.rangeEnd.forEach((v, k) => {
              if (k == 1) v = v + 1
              end.push(this.zeroPad(v))
            })
          } else {
            begin = this.rangeBegin
            end = this.rangeEnd
          }
          this.$emit('input', [begin, end])
          this.$emit('change', [begin, end])
        }
        this.render(this.year, this.month)
      } else if (this.multi) {
        // 如果已经选过则过滤掉
        let filterDay = this.multiDays.filter(v => {
          return this.year === v[0] && this.month === v[1] - 1 && this.days[k1][k2].day === v[2]
        })
        if (filterDay.length > 0) {
          this.multiDays = this.multiDays.filter(v => {
            return this.year !== v[0] || this.month !== v[1] - 1 || this.days[k1][k2].day !== v[2]
          })
        } else {
          this.multiDays.push([this.year, this.month + 1, this.days[k1][k2].day]);
        }
        this.days[k1][k2].selected = !this.days[k1][k2].selected
        this.$emit('input', this.multiDays)
        this.$emit('change', this.multiDays)
      } else {
        // 取消上次选中
        if (this.today.length > 0) {
          this.days.forEach(v => {
            v.forEach(vv => {
              vv.selected = false
            })
          })
        }
        // 设置当前选中天
        this.days[k1][k2].selected = true
        this.day = this.days[k1][k2].day
        this.today = [k1, k2]
        const value = [this.year, this.month + 1, this.days[k1][k2].day]
        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    next() {
      if (this.month == 11) {
        this.month = 0
        this.year = parseInt(this.year) + 1
      } else {
        this.month = parseInt(this.month) + 1
      }
      this.render(this.year, this.month)
      this.$emit('selectMonth', this.month + 1, this.year)
    },
    prev() {
      if (this.month == 0) {
        this.month = 11
        this.year = parseInt(this.year) - 1
      } else {
        this.month = parseInt(this.month) - 1
      }
      this.render(this.year, this.month)
      this.$emit('selectMonth', this.month + 1, this.year)
    },
    selectYear(value) {
      this.year = value
      this.render(this.year, this.month)
      this.$emit('selectYear', value)
      this.$nextTick(() => {
        this.yearVisible = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-container {
  // background: #666;
  // color: white;
  background: white;
  width: 375px;
  max-width: 100%;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.calendar-header {
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  .calendar-title {
    cursor: pointer;
  }
  .header-wrap {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
.week-panel {
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  .cell {
    height: 24px;
    font-size: 14px;
    line-height: 24px;
  }
}
.date-container {
  font-weight: bold;
}
.row {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
.cell {
  width: 14.28571429%;
  display: flex;
  height: 52px;
  justify-content: center;
  .date {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    &:not(.disabled) {
      cursor: pointer;
    }
    &.gray {
      color: #999;
      font-weight: normal;
    }
    &.selected {
      background: #108ee9;
      color: white;
      border-radius: 50%;
    }
    &.is-today {
      border-radius: 50%;
      border: 1px solid #108ee9;
      box-sizing: border-box;
    }
  }
}

.calendar-years {
  position: absolute;
  left: 0px;
  top: 60px;
  right: 0px;
  bottom: 0px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  transform: translateY(-10px);
  span.active {
    border: 1px solid #5e7a88;
    background-color: #5e7a88;
    color: #fff;
  }
  span {
    margin: 1px 5px;
    display: inline-block;
    width: 60px;
    line-height: 30px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #fbfbfb;
    color: #999;
  }
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
