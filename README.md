# kuan-vue-calendar

一个小巧轻量的 vue 日历组件和 picker，支持单选、多选、区域选择

[预览地址](https://kuan1.github.io/kuan-vue-calendar/)

## 安装

```bash
yarn add kuan-vue-calendar
# or
npm i kuan-vue-calendar -S
```

## 使用

```html
<template>
  <div class="test-container">
    <h2 class="sub-title">日历单选</h2>
    <calendar v-model="value" />
    <button @click="alert('value')" class="test-btn">确定</button>
    <h2 class="sub-title">日历多选</h2>
    <calendar v-model="value2" mode="multiple" />
    <button @click="alert('value2')" class="test-btn">确定</button>
    <h2 class="sub-title">日历区间</h2>
    <calendar v-model="value3" mode="range" />
    <button @click="alert('value3')" class="test-btn">确定</button>
    <h2 class="sub-title">日历picker</h2>
    <calendar-picker v-model="value3" mode="range" />
    <button @click="alert('value3')" class="test-btn">确定</button>
  </div>
</template>

<script>
  import { Calendar, CalendarPicker } from 'kuan-vue-calendar'

  export default {
    components: {
      Calendar,
      CalendarPicker
    },
    data() {
      return {
        value: '2019-07-21', // 单选
        value2: ['2019-07-09', '2019-07-20'], // 多选
        value3: ['2019-07-09', '2019-07-20'] // 区间
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

2.0.2

- 显示星期（日历必有的功能，感谢这里的提醒[issues/3](https://github.com/kuan1/kuan-vue-calendar/issues/3)）

  2.0.0

- 日历重写、使用方法发生改变
- 添加日历 picker
- bug 修复

  1.0.0

- 样式修改
- bug 修改
