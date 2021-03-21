<template>
  <div>
    <div id="map-wrap" style="height: 75vh">
    <no-ssr>
      <l-map :zoom=13 :center="[49.4427984, 1.0818785]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[49.4427984, 1.0818785]">
          <l-popup>
            Hello World
          </l-popup>
        </l-marker>
      </l-map>
    </no-ssr>
    </div>
  </div>
</template>

<script>

</script>
