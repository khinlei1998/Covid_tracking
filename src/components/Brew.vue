<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <h1 class="text-center">List</h1>
        <b-form-select v-model="selected" class="mb-3">
          <option v-for="(getcountry, index) in getcountries" :key="index">
            {{ getcountry.Country }}
          </option>
        </b-form-select>
        <!-- {{message}} -->
      </div>
      <div class="col-8"></div>
      <BrewMap />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BrewMap from "./BrewMap.vue";

export default {
  components: {
    BrewMap,
  },
  data() {
    return {
      allcountries: [],
      selected: "",
    };
  },

  mounted() {
    this.$store.dispatch("loadcountry");
    this.$store.dispatch("loadlatlng");
  },

  computed: {
    ...mapState(["getcountries", "getlatlng", "getglobals"]),
  },
};
</script>
<style scoped></style>
