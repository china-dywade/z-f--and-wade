<template>
  <div id="app">
      <Head/>
      <div class="maincontainer">
        <div class="m-c-t">
           <keep-alive>
             <router-view> </router-view> 
           </keep-alive>
        </div>
      </div>
     
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
