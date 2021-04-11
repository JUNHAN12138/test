<template>
  <div id="app">
    <router-link to="/Home">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-link to="/edit">edit</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
