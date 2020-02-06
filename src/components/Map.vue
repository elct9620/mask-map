<template>
  <div ref="map" id="map">
  </div>
</template>

<script>
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  data() {
    return {
      center: [25.105497, 121.597366],
      map: null
    }
  },
  mounted() {
    this.initMap()
    this.setView()
  },
  methods: {
    initMap() {
      this.map = leaflet.map(this.$refs.map)
      this.map.setView(this.center, 12)

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
        .addTo(this.map);
    },
    setView() {
      if (!("geolocation" in navigator)) {
        return
      }

      navigator.geolocation.getCurrentPosition((position) => {
        this.center = [position.coords.latitude, position.coords.longitude]
      });
    }
  },
  watch: {
    center() {
      this.map.setView(this.center, 12)
    }
  }
}
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
