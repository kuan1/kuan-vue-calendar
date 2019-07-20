<template></template>

<script>
import { getMonthDays } from '../utils/calendar.js'

const now = new Date()

export default {
  props: {
    year: {
      type: Number,
      default: now.getFullYear()
    },
    month: {
      type: Number,
      default: now.getMonth() + 1
    }
  },
  data() {
    return {
      days: getMonthDays({ year: this.year, month: this.month })
    }
  },
  mounted() {
    console.log(this.days)
  }
}
</script>

<style>
</style>
