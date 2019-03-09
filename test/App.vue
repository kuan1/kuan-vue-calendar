<template>
  <div class="test">
    <h2>vue - 精简版日历</h2>
    <calendar />
  </div>
</template>

<script>
import { Calendar } from '../src'
export default {
  components: {
    Calendar
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
