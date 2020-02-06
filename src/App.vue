<template>
  <div id="app">
    <Map :points="pharmacies" />
  </div>
</template>

<script>
import Map from './components/Map'

export default {
  name: 'app',
  components: {
    Map
  },
  data() {
    return {
      pharmacies: []
    }
  },
  async mounted() {
    this.pharmacies = await this.getPoints()
  },
  methods: {
    getPoints() {
      return fetch('https://kiang.github.io/pharmacies/json/points.json')
        .then(res => res.json())
        .then(json => json['features'])
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
