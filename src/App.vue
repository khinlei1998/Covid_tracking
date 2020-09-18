<template>
  <div id="app" class="container-fluid">
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
  margin-top: 0px;
  top: 0;
}

#header {
  text-align: left;
  margin-top: 2px;
  line-height: 0;
  margin-bottom: 1.5rem;
}
</style>
