<template>
  <div class="kuan-calendar-outer" :class="{active: visible}">
    <div v-if="visible" @click="visible = false" class="close-bg"></div>
    <div class="kuan-calendar-picker" :class="{active: visible}">
      <input
        :value="computedValue"
        readonly
        placeholder="请选择时间"
        class="input"
        @focus="visible = true"
      >
      <transition name="calendar">
        <calendar
          v-if="visible"
          @input="change"
          :mode="mode"
          :value="value"
          :year="year"
          :month="month"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Calendar from './Calendar.vue'

import { nowYear, nowMonth } from '../utils/calendar.js'

export default {
  components: {
    Calendar
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
      visible: false
    }
  },
  computed: {
    computedValue() {
      if (this.mode === 'single') {
        return this.value
      }
      if (this.mode === 'multiple') {
        return this.value.join('/')
      }
      if (this.mode === 'range') {
        return this.value.join('至')
      }
    }
  },
  methods: {
    change(e) {
      this.$emit('input', e)
      if (['single', 'multiple'].includes(this.mode)) {
        return this.visible = false
      }
      if (this.mode === 'range' && e.length === 2) {
        return this.$nextTick(() => {
          this.visible = false
        })
      }
    }
  }
}
</script>

<style lang="scss">
.kuan-calendar-outer {
  height: 35px;
  width: 230px;
  position: relative;
  .close-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &.active {
    z-index: 1000;
  }
  .kuan-calendar-picker {
    width: 100%;
    display: inline-block;
    position: relative;
    border: 1px solid #d9d9d9;
    border: 4px;
    transition: box-shadow 0.3s;
    &.active {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.18);
      position: absolute;
      left: 0;
      top: 0;
      .input {
        border: none;
        border-radius: 0;
      }
    }
    .kuan-calendar {
      border-radius: 0 0 4px 4px;
      box-shadow: none;
      border-top: 1px solid #eee;
      transform-origin: left top;
    }
    .input {
      padding: 8px 12px;
      border: none;
      width: 100%;
      appearance: none;
      outline: none;
      box-sizing: border-box;
      font-size: 14px;
      width: 100%;
      border: 1px solid #dbdbdb;
      cursor: pointer;
      border-radius: 3px;
    }
    .calendar-enter-active,
    .calendar-leave-active {
      transition: opacity 0.1s, transform 0.1s;
      transform: scaleY(1);
    }
    .calendar-enter,
    .calendar-leave-to {
      opacity: 0;
      transform: scaleY(0);
    }
  }
}
</style>
