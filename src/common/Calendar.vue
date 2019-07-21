<template>
  <div class="kuan-calendar">
    <div class="calendar-header">
      <i class="iconfont icon-doubleleft"></i>
      <i class="iconfont icon-left"></i>
      <div class="current-date">{{year}}-{{month}}</div>
      <i class="iconfont icon-right"></i>
      <i class="iconfont icon-doubleright"></i>
    </div>
    <calendar-item :mode="mode" :value="valueArr" @click="select" :year="year" :month="month"></calendar-item>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.kuan-calendar {
  width: 210px;
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);
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
</style>
