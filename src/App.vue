<template>
  <div id="app">
      <Head/>
      <router-view> </router-view> 
      <Foot/>
  </div>
</template>

<script>
import Head from './head'
import Foot from './footer'
export default {
  components:{
    Head,Foot
  }

}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
}
</style>
