<template>
  <!-- <div class="container-fluid"> -->
  <div class="row" id="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3" id="one">
          <Sidebar />
        </div>
        <div class="col-md-9" id="two">
          <BrewMap :getcountries="getcountries" />
        </div>
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
    Sidebar,
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
<style scoped>
#one {
  border: 1px solid lightgray;
}
</style>
