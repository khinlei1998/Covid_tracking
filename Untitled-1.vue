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
      
      
     
      {{message}}
        
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
      hello:'test',
     
     
    };
  },

  mounted() {
    this.$store.dispatch("loadcountry");
    this.$store.dispatch("loadlatlng");
  },
 
   computed: {
     ...mapState(["getcountries", "getlatlng", "getglobals"]),
    test(){
        let a= this.$store.state.getcountries.forEach((item)=>{
         this.allcountries.push(item.Country)
        })
        return a
    },



    message(){
    // return state.getglobals.map((item) => this.allcountries.push(item))
      //  return this.$store.state.getlatlng.map((latlng)=>latlng)
      let result='';
      let i;
      for(i=0;i<this.allcountries.length;i++){
       
       result= this.$store.state.getlatlng.filter((getcountry)=>getcountry.country==this.allcountries[i])

      }
      return result
      // let result= this.$store.state.getlatlng
     
    //  let test=this.$store.state.getcountries

    // let a= this.$store.state.getlatlng.forEach((item)=>{
    // this.allcountries.push(item)
    // })


   
    //  let b= this.$store.state.getcountries.find((country)=>country.Country)
    //  console.log(b)
    //  let result=this.$store.state.getlatlng.filter((uu)=>uu.country)
    //  console.log(result)
  //  return a
  //   return this.allcountries.filter((country)=>country.country)
    },
  
   
   },

 
};
</script>
<style scoped></style>
