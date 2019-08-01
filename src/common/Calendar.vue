<template>
  <div class="kuan-calendar">
    <div class="calendar-header">
      <i @click="renderPreYear" class="iconfont icon-doubleleft"></i>
      <i @click="renderPreMonth" class="iconfont icon-left"></i>
      <div class="current-date">{{y}}-{{m}}</div>
      <i @click="renderNextMonth" class="iconfont icon-right"></i>
      <i @click="renderNextYear" class="iconfont icon-doubleright"></i>
    </div>
    <div class="weeks">
      <div v-for="week in weeks" :key="week" class="week">{{week}}</div>
    </div>
    <calendar-item :mode="mode" :value="valueArr" @click="select" :year="y" :month="m"></calendar-item>
    <div @click="renderToday" class="footer">今天</div>
  </div>
</template>

<script>
import CalendarItem from './CalendarItem.vue'

import { nowYear, nowMonth, toDate } from '../utils/calendar.js'

export default {
  components: {
    CalendarItem
  },
  props: {
    mode: {
      validator(value) {
        return ['single', 'multiple', 'range'].includes(value)
      },
      default: 'single'
    },
    value: {
      type: [Array, String],
      default: ''
    },
    year: {
      type: Number,
      default: nowYear
    },
    month: {
      type: Number,
      default: nowMonth
    }
  },
  data() {
    return {
      y: this.year,
      m: this.month,
      weeks: [
        '日', '一', '二', '三', '四', '五', '六'
      ]
    }
  },
  computed: {
    valueArr() {
      return this.mode === 'single' ? [this.value] : this.value
    }
  },
  methods: {
    select(e) {
      let value = [...this.value]
      switch (this.mode) {
        case 'single':
          this.$emit('input', e)
          break
        case 'multiple':
          if (value.includes(e)) {
            this.$emit('input', value.filter(item => item !== e))
          } else {
            value.push(e)
            this.$emit('input', value)
          }
          break
        case 'range':
          if (value.length === 1) {
            const [select] = value
            if (toDate(select) > toDate(e)) {
              value.unshift(e)
            } else {
              value.push(e)
            }
          } else {
            value = [e]
          }
          this.$emit('input', value)
          break
        default:
          console.error('mode类型错误')
      }
    },
    renderPreYear() {
      this.y -= 1
    },
    renderNextYear() {
      this.y += 1
    },
    renderPreMonth() {
      if (this.m === 1) {
        this.y = this.y - 1
        this.m = 12
      } else {
        this.m -= 1
      }
    },
    renderNextMonth() {
      if (this.m === 12) {
        this.y = this.y + 1
        this.m = 1
      } else {
        this.m += 1
      }
    },
    renderToday() {
      this.y = nowYear
      this.m = nowMonth
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #3f8de2;

@import './iconfont.scss';

.kuan-calendar {
  width: 230px;
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);
  background: white;
}
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  .current-date {
    flex: 1;
    text-align: center;
  }
  .iconfont {
    font-size: 12px;
    color: #666;
    cursor: pointer;
    padding: 10px 5px 8px;
  }
}
.weeks {
  display: flex;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  color: #666;
  padding: 5px 0;
  .week {
    flex: 1;
    text-align: center;
  }
}
.footer {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #eee;
  color: #3f8de2;
  cursor: pointer;
}
</style>
