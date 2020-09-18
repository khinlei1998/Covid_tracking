<template>
  <div id="sidebar">
    <h5 style="margin-top:15px">COVID-19 Tracker</h5>
    <div id="divider"></div>
    <h4 style="margin-top:19px">Total Confirmed Cases</h4>

    <div v-for="(global, index) in getglobal" :key="index">
      <h3 v-bind:style="{ color: activeColor }">
        {{ global.total_cases.toLocaleString() }}
      </h3>

      <b-icon icon="circle-fill" variant="success" font-scale="0.7"></b-icon>
      <span>Total Recoverd: {{ global.total_recovered.toLocaleString() }}</span
      ><br />

      <div style="margin-top:8px">
        <b-icon icon="circle-fill" variant="danger" font-scale="0.7"></b-icon>
        <span>Total Deaths:{{ global.total_deaths.toLocaleString() }}</span
        ><br />
      </div>

      <div style="margin-top:8px">
        <b-icon icon="globe" variant="primary" font-scale="0.9"></b-icon>
        <span
          >Total Affected Country:{{ global.total_affected_countries }}</span
        >
      </div>
    </div>
    <div id="divider"></div>
      
    <perfect-scrollbar>
      <div
        class="card"
        style="margin-top:5px"
        id="countrycard"
        v-for="country in getcountries"
        :key="country.country_code"
      >
        <div class="card-body">
          <div style=" text-align: center;">
          <p style="display:inline; "> {{ country.location }}</p>: <p style="display:inline;">{{ country.confirmed }}</p>
          </div>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeColor: "red",
    };
  },
  components: {
    PerfectScrollbar,
  },
  mounted() {
    this.$store.dispatch("loadglobal", "loadcountry");
  },
  computed: {
    ...mapState(["getglobal", "getcountries"]),
  },
};
</script>
<style scoped>
#sidebar {
    background-color: pink;

  text-align: center;
}
#divider {
  background-color: grey;
  height: 1px;
  width: 90%;
  margin-left: 20px;
  /* line-height: 12px; */
  margin-top: 16px;
}
#countrycard {
  width: 300px;
  margin-left: 50px;
  /* position:center; */
  background-color: #dfdddd;
  cursor: pointer;
}
</style>
