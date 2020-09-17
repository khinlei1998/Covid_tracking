import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex,axios)
export const store = new Vuex.Store({
    state:{
        getcountries:[

        ],
        getglobal:[],
        getglobals:[]
    },
    actions:{
        loadcountry({commit}) {
            axios.get('https://www.trackcorona.live/api/countries')
            .then(result => {
                console.log(result.data)
                //  console.log(result.data.Global)
               
              commit('getcountry',result.data.data);
              // commit('getglobal', result.data.Global);
            }).catch(error => {
              throw new Error(`API ${error}`);
            });
          },

          loadglobal({commit}) {
            axios.get('https://api.thevirustracker.com/free-api?global=stats')
            .then(result => {
                console.log(result.data.results)
                //  console.log(result.data.Global)
               
              commit('getglobal',result.data.results);
              // commit('getglobal', result.data.Global);
            }).catch(error => {
              throw new Error(`API ${error}`);
            });
          },

    },
    mutations:{
          getcountry(state, getcountries) {
            state.getcountries = getcountries;
          },
          // getglobal(state, getglobals) {
          //   state.getglobals = getglobals;
          // },
          getglobal(state, getglobal) {
            state.getglobal = getglobal;
          }
    },
})