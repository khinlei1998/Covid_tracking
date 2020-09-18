<template>
  <div class="row map">
    <!-- {{ getcountrie }} -->
    <!-- <h2>Center is {{ currentcenter }}, zoom is {{ currentzoom }}</h2> -->
    <l-map
      @update:zoom="zoomupdate"
      @update:center="centerupdate"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-circle
        v-for="(alocation, index) in getcountries"
        :key="index"
        :lat-lng="
          latLng(
            Math.round(alocation.latitude),
            Math.round(alocation.longitude)
          )
        "
        :radius="circle.radius"
        :color="circle.color"
        :weight="circle.weight"
        :Opacity="circle.Opacity"
        :width="circle.width"
        :pane="circle.pane"
      >
        <l-popup>
          <h6 style="text-align:center">{{ alocation.location }}</h6>
          <div id="divider"></div>
         
                <div style="margin-top:8px">
               <b-icon icon="circle-fill" variant="warning" font-scale="0.7"></b-icon>
               <p style="margin-bottom:7px; display:inline" >Confirmed:
                      {{
            alocation.confirmed
          }}</p><br>
          </div>

            <div style="margin-top:8px">
           <b-icon icon="circle-fill" variant="success" font-scale="0.7"></b-icon>
            <p style="margin-bottom:9px;display:inline">  Recovered:     {{ alocation.recovered }}</p><br>
            </div>

            <div  style="margin-top:8px">
            <b-icon icon="circle-fill" variant="danger" font-scale="0.7"></b-icon>
            <p style="margin-bottom:9px;display:inline"> Death:    {{
            alocation.recovered
          }}</p>
          </div>

        </l-popup>
      </l-circle>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LPopup, LCircle } from "vue2-leaflet";
import L from "leaflet";
import icon from "../assets/icon.png";
export default {
  data() {
    return {
      currentcenter: L.latLng(38.5879,36.6945),
      currentzoom: 4,
      zoom: 4,
      center: L.latLng(38.5879,36.6945),
      url:
        // "	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        
        "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b5dc3f1db4bb4eb999461d659b91db46",

      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(20.144444, 92.896942),
      // circle:L.circle(16.8409, 96.1735),
      icon: icon,
      iconSize: [40, 40],

      circle: {
        radius: 4500,
        color: "red",

        Opacity: 1,
        weight: 6,
        pane: "shadowPane",
      },
     
      //  label:marker.bindPopup("This is the Transamerica Pyramid").openPopup(),
    };
  },

  components: {
    LMap,
    LTileLayer,

    LPopup,
    LCircle,

    // LIcon,
  },
  props: ["getcountries"],
  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },
    centerupdate: function(center) {
      this.currentcenter = center;
    },
    zoomupdate: function(zoom) {
      this.currentzoom = zoom;
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
<style>
.map {
  height: 100%;
  /* width: 100%; */
}
l-circle {
  background-color: red;
  width: 90px;
}
.leaflet-popup-content-wrapper {
  /* background-color: pink; */
  width:200px;
  color: black;
}
#divider {
  background-color: grey;
  height: 1px;
  width: 90%;
  margin-left:10px;
  /* line-height: 20px; */
  /* margin-top: 16px; */
}
</style>
