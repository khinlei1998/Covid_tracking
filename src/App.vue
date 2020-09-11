<template>
  <div id="app" class="conatiner-fluid">
    <!-- <Overview :getglobal="getglobals" :getcountrie="getcountries" /> -->
    <!-- <Sidebar/> -->

    <Brew />
  </div>
</template>

<script>
import Brew from "./components/Brew.vue";

export default {
  name: "App",
  components: {
    Brew,
  },
  data() {
    return {};
  },
};
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
