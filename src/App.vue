<template>
  <div id="app" class="conatiner-fluid">
   <!-- <h1 id="header">COVID-19 Tracker</h1> -->
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
  margin-top: 0px;
  top:0;
  /* border:1px solid red; */
}
body{
  /* border:1px solid blue; */
  /* margin-top: 90px; */
 
  
  /* padding: 15px; */

  
}
#header{
  text-align: left;
  margin-top: 2px;
  line-height: 0;
  margin-bottom: 1.5rem;
}
</style>
