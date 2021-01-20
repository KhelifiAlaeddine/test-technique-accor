<template>
  <div>
    {{result}}
  </div>

</template>

<script>
import app from './helpers/app.js'

export default {
  name: 'App',
  data: function () {
    return {
      result: app.findHotelNearbyWithBestOfferForUser(48.856564, 2.351711, 5000, '14/01/2021', 4)
    }
  }
}

</script>

<style >

</style>
