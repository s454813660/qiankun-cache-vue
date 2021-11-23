<template>
  <div id="app">
    <div>
      <router-link v-for="route in routes" :key="route.name" :to="route.path">{{route.name}} | </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routes: []
    }
  },
  created() {
    console.log(this.$router)
    this.routes = this.$router.options.routes;
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
