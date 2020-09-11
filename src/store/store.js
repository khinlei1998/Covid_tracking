import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex,axios)
export const store = new Vuex.Store({
    state:{
        getcountries:[

        ],
        getlatlng:[],
        getglobals:[]
    },
    actions:{
        loadcountry({commit}) {
            axios.get('https://api.covid19api.com/summary')
            .then(result => {
                console.log(result.data.Countries)
                // console.log(result.data.Global)
               
              commit('getcountry', result.data.Countries);
              commit('getglobal', result.data.Global);
            }).catch(error => {
              throw new Error(`API ${error}`);
            });
          },

          loadlatlng({commit}) {
            axios.get('https://raw.githubusercontent.com/eesur/country-codes-lat-long/master/country-codes-lat-long-alpha3.json')
            .then(result => {
                console.log(result.data)
               
              commit('getlatlng', result.data);
            }).catch(error => {
              throw new Error(`API ${error}`);
            });
          },
    },
    mutations:{
          getcountry(state, getcountries) {
            state.getcountries = getcountries;
          },
          getglobal(state, getglobals) {
            state.getglobals = getglobals;
          },
          getlatlng(state, getlatlng) {
            state.getlatlng = getlatlng;
          }
    },
})