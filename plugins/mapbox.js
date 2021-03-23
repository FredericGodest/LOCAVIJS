/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Mapbox from 'mapbox-gl';
import { MglMap, MglGeolocateControl, MglNavigationControl, MglMarker, MglPopup } from 'vue-mapbox';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

Vue.component('MglMap', MglMap);
Vue.component('MglGeolocateControl', MglGeolocateControl);
Vue.component('MglNavigationControl', MglNavigationControl);
Vue.component('MglMarker', MglMarker);
Vue.component('MglPopup', MglPopup);

Vue.prototype.$mapbox = Mapbox;
