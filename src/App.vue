<template>
  <!-- <img alt="Vue logo" class="fade-in" src="./assets/logo.png"> -->

  <pockemon-page />
  
</template>

<script>
import PockemonPage from './pages/PockemonPage.vue'


export default {
  name: 'App',
  components: {
    PockemonPage

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
