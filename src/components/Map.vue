<template>
  <div ref="map" id="map">
  </div>
</template>

<script>
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  props: {
    points: { type: Array, default: () => [] }
  },
  data() {
    return {
      center: [25.105497, 121.597366],
      zoom: 13,
      markerIcon: null,
      noMarkIcon: null,
      markers: [],
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
      this.map.setView(this.center, this.zoom)
      this.map.on('moveend', (ev) => this.onMove(ev))
      this.map.on('zoomend', (ev) => this.onZoom(ev))
      this.markerIcon = leaflet.icon({
        iconUrl: '/marker.png',
        iconSize: [32, 32],
        iconAnchor: [17, 31],
      })
      this.noMarkerIcon = leaflet.icon({
        iconUrl: '/red_marker.png',
        iconSize: [32, 32],
        iconAnchor: [17, 31],
      })

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
        this.map.setView(this.center, this.zoom)
      });
    },
    addMarker() {
      this
        .points
        .filter(point => {
          const [pLng, pLat] = point.geometry.coordinates
          const [cLat, cLng] = this.center

          const dist = Math.sqrt(Math.pow(cLat - pLat, 2) + Math.pow(cLng - pLng, 2))

          return dist <= 0.01 * ((18 + 5) - this.zoom)
        })
        .forEach(point => {
          const available = (point.properties.mask_adult + point.properties.mask_child) > 0
          const marker = leaflet
            .marker(
              [point.geometry.coordinates[1], point.geometry.coordinates[0]],
              {
                icon: available ? this.markerIcon : this.noMarkerIcon,
                title: point.properties.name
              }
            )
          this.markers.push(marker)
          marker.addTo(this.map)
          marker.bindPopup(`${point.properties.name} @ ${point.properties.address}`)
      })
    },
    clearMarkers() {
      this.markers.forEach(marker => {
        this.map.removeLayer(marker)
      })

      this.markers = []
    },
    refreshMarker() {
      this.clearMarkers()
      this.addMarker()
    },
    onMove(ev) {
      if (ev.target) {
        const center = this.map.getCenter()
        this.center = [center.lat, center.lng]
      }
    },
    onZoom(ev) {
      if (ev.target) {
        this.zoom = this.map.getZoom()
      }
    }
  },
  watch: {
    center() {
      this.refreshMarker()
    },
    points() {
      this.refreshMarker()
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
