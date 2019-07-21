<template>
  <div class="test-container">
    <div class="link">
      <a href="https://www.npmjs.com/package/kuan-vue-calendar">npm地址：kuan-vue-calendar</a>
    </div>
    <h2 class="sub-title">日历单选</h2>
    <calendar v-model="value"/>
    <button @click="alert('value')" class="test-btn">确定</button>
    <h2 class="sub-title">日历多选</h2>
    <calendar v-model="value2" mode="multiple"/>
    <button @click="alert('value2')" class="test-btn">确定</button>
    <h2 class="sub-title">日历区间</h2>
    <calendar v-model="value3" mode="range"/>
    <button @click="alert('value3')" class="test-btn">确定</button>
    <h2 class="sub-title">日历Picker</h2>
    <calendar-picker v-model="value3" mode="range"/>
    <button @click="alert('value3')" class="test-btn">确定</button>
  </div>
</template>

<script>
import { Calendar, CalendarPicker } from '../src'
import { fixZero } from '../src/utils/index.js'

const now = new Date()
const y = now.getFullYear()
const m = now.getMonth() + 1
const d = now.getDate()

export default {
  components: {
    Calendar,
    CalendarPicker
  },
  data() {
    return {
      value: `${y}-${fixZero(m)}-${fixZero(d)}`, //  单选 2019-07-21
      value2: [`${y}-${fixZero(m)}-09`, `${y}-${fixZero(m)}-20`], // 多选 [2019-07-09, 2019-07-20]
      value3: [`${y}-${fixZero(m)}-09`, `${y}-${fixZero(m)}-20`] // 区间 [2019-07-09, 2019-07-20]
    }
  },
  methods: {
    alert(key) {
      alert(JSON.stringify(this[key]))
    }
  }
}
</script>

<style lang="scss">
$main-color: #3f8de2;

* {
  margin: 0;
  padding: 0;
}
.test-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
}
.link {
  font-size: 12px;
  a {
    color: $main-color;
  }
}
.sub-title {
  text-align: center;
  line-height: 3;
  margin-top: 25px;
}
.test-btn {
  appearance: none;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  height: 30px;
  outline: 0;
  overflow: hidden;
  text-align: center;
  padding: 0 20px;
  margin: 5px;
  border: 1px solid $main-color;
  cursor: pointer;
  color: #fff;
  margin: 20px;
  background-color: $main-color;
  &:active {
    opacity: 0.9;
  }
}
</style>
