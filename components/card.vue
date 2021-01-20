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
      result: app.findHotelsNearby(48.856564, 2.351711, 800)
    }
  }
}

</script>

<style >

</style>
