<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from 'components/MainTabBar'

  export default {
    name: 'APP',
    components: {
      MainTabBar
    }
  }
</script>
<style scoped>
@import "assets/css/base.css";
</style>
