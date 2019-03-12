<template>
  <div class="test-container">
    <h2 class="sub-title">日历单选</h2>
    <calendar v-model="value" />
    <button class="test-btn" @click="alert('value')">提交</button>

    <h2 class="sub-title">日历多选</h2>
    <calendar multi v-model="value2" />
    <button class="test-btn" @click="alert('value2')">提交</button>

    <h2 class="sub-title">日历区间选择</h2>
    <calendar range v-model="value3" />

    <button class="test-btn" @click="alert('value3')">提交</button>
  </div>
</template>

<script>
import { Calendar } from '../src'

const now = new Date()
const y = now.getFullYear()
const m = now.getMonth() + 1
const d = now.getDate()

export default {
  components: {
    Calendar
  },
  data() {
    return {
      value: [y, m, d], //  单选
      value2: [[y, m, 10], [y, m, 11], [y, m, 15]], // 多选
      value3: [[y, m, 10], [y, m, 20]] // [开始时间, 结束时间]
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
* {
  margin: 0;
  padding: 0;
}
.test-container {
  width: 375px;
  margin: 50px auto;
}
.sub-title {
  text-align: center;
  line-height: 3;
  margin-top: 25px;
}
.test-btn {
  padding: 6px 20px;
  display: block;
  margin: 10px auto;
  font-size: 30px;
}
</style>
