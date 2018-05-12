<template>
  <div>
        <div style="borderRadius:10px" class="carouselcontent">
            <el-carousel :interval="5000"  height="400px" indicator-position="none">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3><img src='../assets/mm'+item+'.jpg' alt="">
                
                </h3>
              </el-carousel-item>
            </el-carousel>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
