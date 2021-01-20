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
      result: app.findHotelNearbyWithBestOffer(48.856564, 2.351711, 5000, '14/01/2021')
    }
  }
}

</script>

<style >

</style>
