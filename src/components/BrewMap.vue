<template>
  <div class="row map">
    <!-- {{ getcountrie }} -->
    <!-- <h2>Center is {{ currentcenter }}, zoom is {{ currentzoom }}</h2> -->
    
    <h1>Map</h1>
 
     <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker">
         <l-popup>Hello!</l-popup>
      </l-marker>
     
    </l-map>
    

  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker,LPopup} from "vue2-leaflet";
import L from "leaflet";
import icon from "../assets/icon.png";
export default {
  data() {
    return {
      currentcenter: L.latLng(16.838227, 96.164627),
      currentzoom: 12,
      zoom: 12,
      center: L.latLng(16.838227, 96.164627),
      url:
        "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=b5dc3f1db4bb4eb999461d659b91db46",
      // url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',

      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(16.838227, 96.164627),
      icon: icon,
      iconSize: [40, 40],
      //  label:marker.bindPopup("This is the Transamerica Pyramid").openPopup(),
    };
  },

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
    // LIcon,
   
  },
  props: {
    getlatlng: Array,
  },
  methods: {
    // latLng: function(lat, lng) {
    //   return L.latLng(lat, lng);
    // },
    // centerupdate: function(center) {
    //   this.currentcenter = center;
    // },
    // zoomupdate: function(zoom) {
    //   this.currentzoom = zoom;
    // },
  },
};
</script>
<style>
.map {
  height: 95vh;
  width: 100%;
}
</style>
