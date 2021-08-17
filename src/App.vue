<template>
  <CMS msg="Welcome to Your Vue.js App"/>
</template>

<script>
import CMS from './components/CMS.vue'

export default {
  name: 'App',
  components: {
    CMS
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
