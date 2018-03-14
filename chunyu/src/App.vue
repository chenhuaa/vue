<template>
  <div id="app">
    <!--<Fab></Fab> -->
    <router-view/>
  </div>
</template>

<script>
import Fab from './components/fab.vue'
export default {
  name: 'App',
  components: { Fab }
}
</script>

<style>

</style>
