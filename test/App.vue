<template>
  <div class="test-container">
    <h2 style="text-align: center">日历选择例子</h2>

    <calendar v-model="value" />
    <button class="btn" @click="test">提交</button>

    <hr>
    <calendar multi v-model="value2" />
    <button class="btn" @click="test">提交</button>

    <hr>
    <calendar range v-model="value3" />

    <button class="test-btn" @click="test">提交</button>
  </div>
</template>

<script>
import { Calendar } from '../src'
export default {
  components: {
    Calendar
  },
  data() {
    return {
      value: [], //  单选
      value2: [[2019, 3, 10], [2019, 3, 11], [2019, 3, 15]], // 多选
      value3: [[2019, 3, 10], [2019, 3, 20]] // [开始时间, 结束时间]
    }
  },
  methods: {
    test() {
      console.log(this.value)
      console.log(this.value2)
      console.log(this.value3)
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
.test-btn {
  padding: 4px 8px;
  display: block;
  margin: 10px auto;
  font-size: 30px;
}
</style>
