<template>

<div>
  
            <div class="carouselcontent">
                <el-carousel :interval="5000"  height="600px" indicator-position="none">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <!-- <h3><img src="../assets/mm"  +item+  ".jpg"+item alt=""> -->
                    <h3>
                      <img :src=" 'src/assets/mm'+  item + '.jpg' ">              
                    </h3>
                  </el-carousel-item>
                </el-carousel>
            </div>
            <div class="cardlist">
                  <el-col :span="6" v-for="item in 4" :key="item">
                    <el-card shadow="hover">
                      <div class="container">
                        <img :src=" 'src/assets/card'+  item + '.jpg' " alt="">
                      </div>
                    </el-card>
                  </el-col>

            </div> 
            <panel :prop="componentslist1"/>
            <panel :prop="componentslist2"/>
</div>
    
</template>

<script>
import panel from '../panel'

export default {
  data() {
    return {
      componentslist1:{
        title:"热门商品",
        components:'hotpro.vue'
      },
      componentslist2:{
        title:"官方精选",
        components:'hotpro.vue'
      },
    }
  },
  components:{
   panel
  }

}
</script>

<style>

</style>
