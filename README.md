# kuan-vue-calendar

目的：制作一个简单轻量的日历选择插件，支持单选、多选、区域选择

(参考 vue-calendar)[https://github.com/jinzhe/vue-calendar]

(预览地址)[https://kuan1.github.io/kuan-vue-calendar/]

### 使用 DEMO

```vue
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
import { Calendar } from 'kuan-vue-calendar'
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
    alert(key) {
      alert(JSON.stringify(this[key]))
    }
  }
}
</script>
```

## 修改日志
