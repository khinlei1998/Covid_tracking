<template>
    <div id="sidebar">
          <!-- <h4>Covid-19 Tracker</h4> -->
            <h5>Total Confirmed Cases</h5>
       <div id="divider"  ></div>
    <!-- {{getglobal}} -->
      <div v-for="(global, index) in getglobal" :key="index">
          <h3 v-bind:style="{color:activeColor}">{{global.total_cases}}</h3>
          <p>Total Recoverd: {{global.total_recovered}}</p>
          <p>Total Deaths:{{global.total_deaths}}</p>
          <p>Total affected country:{{global.total_affected_countries}}</p>
      </div>
       <div id="divider"  ></div>
        <perfect-scrollbar>
        <div class="card" style="margin-top:5px" id="countrycard"  v-for="country in getcountries" :key="country.country_code"
             >
              <div class="card-body"  >
                <div style=" text-align: center;">{{country.location}}; {{country.confirmed}}</div>
              </div>
        </div>
        </perfect-scrollbar>

     

    </div>
</template>
<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { mapState } from "vuex";
export default {
    data(){
        return{
            activeColor:'red',
        }
    },
      components: {
        PerfectScrollbar
    },
    mounted() {
    
    this.$store.dispatch("loadglobal","loadcountry");
  },
   computed: {
    ...mapState(["getglobal","getcountries"]),

  }, 
}
</script>
<style scoped>
#sidebar{
    /* background-color: black; */
    text-align: center;
    /* margin:0; */
    /* padding:0; */
}
#divider{
background-color:grey; height: 1px; width:80%; margin-left: 20px;line-height:3px;
}
#countrycard{
   
  width:320px; 
  margin-left:10px; 
  background-color:#DFDDDD;
  cursor:pointer;
}
/* .ps {
  height: 500px;
} */

</style>