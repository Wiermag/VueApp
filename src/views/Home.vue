<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Country msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from '@/components/Country.vue'

export default {
  name: 'Home',
  components: {
    Country
  }
}
</script>
