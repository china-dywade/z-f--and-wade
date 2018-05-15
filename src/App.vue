<template>
  <div id="app">
    <div v-if="$store.state.islogin==false">
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
    <div v-if="$store.state.islogin">
      <login/>
    </div>
  </div>
</template>

<script>
import Head from './head'
import Foot from './footer'
import login from './login'
export default {
  components:{
    Head,Foot,login
  }

}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
}
</style>
