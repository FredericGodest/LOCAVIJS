<template>
 <div class="text-sm flex flex-col sm:block">
		<div class="flex flex-col flex-1 md:flex-row justify-end w-full">
   <div class="w-full md:w-1/2 p-4">
    <h1 class="w-full p-4 text-2xl font-bold text-gray-700 font-medium">Découvrez les meilleures locations du coin</h1>
   </div>
    <div class="hidden md:inline-flex p-4 w-1/2 flex items-center mb-6 justify-end flex-col lg:flex-row lg:mb-0 lg:justify-between">
     <div ref="mapSearch" class="w-full order-last lg:order-first"></div>
    </div>
		</div>
  <div class="map flex flex-col flex-1 md:flex-row justify-center w-full">
  <div class="flex flex-col w-full h-24 py-4 px-2 mb-4 bg-gray-100 flex-grow flex-shrink-0 overflow-x-auto h-6 md:h-auto md:overflow-y-auto md:flex-col md:w-1/2 md:mb-0 ">
   <div class="w-full"
        :class="{ 'bg-orange-200': selectedMarker == marker.id }"
        v-for="(marker, index) in payload"
        :key="marker.id"
        @click="itemClicked(index)"
        ref="items">
    <PropertyList :id="marker.id" :title="marker.label" :description="marker.description" :surface="marker.surface" />
   </div>
  </div>
  <client-only>
      <MglMap
        class="w-full md:w-1/2 flex-grow h-full min-h-full hidden md:block"
        :access-token="access_token"
        :map-style="mapStyle"
        :scrollZoom="false"
        :center="mapCenter"
        :zoom="defaultZoom"
        @load="onMapLoaded">
        <MglNavigationControl :showZoom="true" :showCompass="false" />
        <MglGeolocateControl/>
        <MglMarker
    					v-for="marker in payload"
    					:coordinates="[marker.lng, marker.lat]"
    					:draggable="true"
    					:color.sync="markerColor"
    					:markerId="marker.id"
    					:key="marker.id + '' + markerColor"
    					@click="markerClicked"
    					ref="markers">
    					<MglPopup>
          <div class="max-w-xs mx-auto overflow-hidden bg-white dark:bg-gray-800">
            <img class="object-cover w-full h-20" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="marker">
            <div class="py-2 text-center">
              <p class="block text-lg font-bold text-gray-800 dark:text-white">{{ marker.label }}</p>
              <span class="text-sm text-gray-700 dark:text-gray-200">{{ marker.description }}</span>
            </div>
          </div>
    					</MglPopup>
    				</MglMarker>
      </MglMap>
     </client-only>
   </div>
  </div>
</template>
<script>
import Mapbox from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
const axios = require('axios');

export default{
  data () {
    return{
      access_token: 'pk.eyJ1IjoiZnJlZGVyaWNnb2Rlc3QiLCJhIjoiY2tta3IzajJlMTNzMTJvazVzMjd4ZmRnNiJ9.7LSYw-5hVeAvrbsfyD7Fqg',
      mapStyle: 'mapbox://styles/fredericgodest/ckjsxregm5lfh19qkpyyubikf',
      defaultZoom: 12,
      mapCenter: [1.098460, 49.442402],
      markerColor: 'orange',
      useCustomMarker: false,
      buttonDisabled: false,
      counter: 0,
      selectedMarker: null,
      payload: [
       {id: 0,
        label: "Appartement cosy",
        description:"Superbe appartement cosy dans le centre ville. Terrasse agréable l'été.",
        surface: 31,
        lat: 49.442402,
        lng: 1.098460},
       {id: 1,
        label: "Maison 3 chambres",
        description:"Maison au calme et proche de toutes commodités",
        surface: 120,
        lat: 49.432402,
        lng: 1.096460},
       {id: 2,
        label: "Appartement moderne",
        description:"Appartement dans un quartier tranquille, idéal pour un jeune actif, qui saura certainement apprécier le design de celui-ci.",
        surface: 45,
        lat: 49.443402,
        lng: 1.092460},
       {id: 3,
        label: "Garage refait à neuf",
        description:"Garage avec électricité et possibilité de laver sa voiture.",
        surface: 9,
        lat: 49.454402,
        lng: 1.098460},
       {id: 4,
        label: "Appartement T2",
        description:"Appartement très bien situé, avec balcon donnant sur la cour intérieure.",
        surface: 55,
        lat: 49.485402,
        lng: 1.090460},
       {id: 5,
        label: "Appartement T1",
        description:"Cet appartement est idéal si on souhaite se rapprocher du centre.",
        surface: 28,
        lat: 49.446402,
        lng: 1.095460},
       {id: 6,
        label: "Studio",
        description:"Pouvant accueillir un étudiant, cet appartement est party proofed !",
        surface: 22,
        lat: 49.437402,
        lng: 1.091460},
       {id: 7,
        label: "Maison d'architecte",
        description:"Bien très rare en location, réalisé par le célèbre architecte Yann Von Löfe",
        surface: 200,
        lat: 49.488402,
        lng: 1.093460},
       ],
      // Geocoder
      address: '',
      info: null
    }
  },
  mounted () {
    var response = "";
    axios
      .get('http://localhost:8080/advice/all')
      .then(response => console.log(response.data))
    console.log("response ", response)
  },
  methods:{
   onMapLoaded(event) {
    this.map = event.map;
    this.addGeocoder();
   },
   itemClicked(index) {
    this.$refs['markers'][index].togglePopup();
    this.selectedMarker = index;
    this.$refs.markers.forEach((marker, i) => {
     if (i != index) {
      marker.marker._popup.remove();
     }
    });

    this.$nextTick(() => {
     this.map.panTo(this.$refs['markers'][index].coordinates);
    });
   },
   markerClicked(event) {
    let markerId = event.component.$attrs.markerId;
    this.selectedMarker = markerId;
    this.$refs.items[markerId].scrollIntoView({
     behavior: 'smooth',
     block: 'center',
     inline: 'center',
    });
   },
   addGeocoder() {
 			this.geocoder = new MapboxGeocoder({
 				accessToken: this.mapbox.accessToken,
 				mapboxgl: this.mapbox,
 				marker: false,
 			});
 			this.$refs.mapSearch.appendChild(this.geocoder.onAdd(this.map));

 			let $this = this;
 			this.geocoder.on('result', function() {
 				$this.$nextTick(() => {
 				});
 			});
 		},
  },
  created() {
   this.map = null;
   this.mapbox = Mapbox;
  },
}

</script>

<style>
.map {
	height: 500px;
}
@media screen and (min-width: 640px) {
	.mapboxgl-ctrl-geocoder {
		width: 100% !important;
		max-width: 100% !important;
	}
}
</style>
