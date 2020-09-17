<template>
  <div class="container-fluid">
    <div class="row" id="main">
      <div class="col-3" >
      <Sidebar/>
           
     </div>
      <div class="col-9" >
        
        <BrewMap :getcountries="getcountries" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import Sidebar from "./Sidebar.vue";
import BrewMap from "./BrewMap.vue";

export default {
  components: {
    BrewMap,
    Sidebar
   
    
  },
  data() {
    return {
      allcountries: [],
      selected: "",
      hello: "test",
      ans: [],
    };
  },

  mounted() {
    this.$store.dispatch("loadcountry");
    this.$store.dispatch("loadglobal");
  },

  computed: {
    ...mapState(["getcountries", "getglobal"]),

  },
};
</script>
<style >


</style>
