<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/css/common.scss";
  @import "./assets/css/reset.scss";
  @import "./assets/css/variable.scss";
</style>
