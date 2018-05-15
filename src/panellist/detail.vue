<template>
  <div>
    我是详情-=-----{{pageID}}
  </div>
</template>

<script>
export default {
        data(){
            return {
              pageID: null
            }
        },
        watch:{
          '$route':function(route){
                console.log("router changed");
                this.pageID=route.params.pid;
          }
        },
        created:function(){
            console.log(this.pageID)
        }

 
}
</script>

<style>

</style>
