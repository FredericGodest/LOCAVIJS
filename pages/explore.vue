<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
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
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom:11,
        center:[1.0818927999999999,49.4427921]
      })
    }
  }

}
</script>

<style>

#map{
   width:100%;
   height:75vh;
}

</style>
