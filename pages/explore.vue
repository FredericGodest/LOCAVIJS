<template>
  <div>
      <div id="map"></div>
    
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from 'mapbox-gl-geocoder'
export default{
  data () {
    return{
      access_token: 'pk.eyJ1IjoiZnJlZGVyaWNnb2Rlc3QiLCJhIjoiY2tta3IzajJlMTNzMTJvazVzMjd4ZmRnNiJ9.7LSYw-5hVeAvrbsfyD7Fqg',
      map:{}
    }
  },
  mounted () {
    this.createMap()
  },
  methods:{
    createMap(){
      mapboxgl.accessToken = this.access_token;
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true});

      function successLocation(position){
        let lat = position.coords.latitude
        let long = position.coords.longitude
        setupMap([long, lat])
      };

      function errorLocation(){
        setupMap([1.0986917,49.443603])
      };

      function setupMap(coordinate){
        // MAP INIT
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/fredericgodest/ckjsxregm5lfh19qkpyyubikf',
            center: coordinate,
            zoom: 11
        });

        // AJOUT DES CONTROLS
        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-left');
      };
    }
  },
}

</script>

<style>

#map{
  position: relative; 
  width:100%;
  height:75vh;
}

</style>
