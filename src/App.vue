<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #abeace;
}
</style>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
