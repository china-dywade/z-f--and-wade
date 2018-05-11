<template>
<header>  
    <el-row>
      <el-col :span="24">
        <div class="bg-purple-dark">
              <div class="m-c-t">
                <div class="head-ct">
                          <div class="lt logo">
                            <div class="lt">
                                <router-link to="/home">M</router-link>
                            </div>                   
                            <div class="siContent lt">
                                <el-input
                                      placeholder="请输入商品信息"
                                      prefix-icon="el-icon-search"
                                      v-model="seachVal"  
                                      @keyup.native.enter="seachCallBack()">
                                </el-input>
                            </div>             
                          </div>
                      <div class="rt">
                          <el-dropdown trigger="click" v-if="$store.state.islogin">
                            <span class="el-dropdown-link">
                                <i class="el-icon-setting el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" >
                               <el-dropdown-item v-for="(item,index) in settingList" @click="addRouter(index)" :key="index"><router-link :to='routerAddress[index]'>{{item}}</router-link></el-dropdown-item>
                                <!-- <el-dropdown-item to="/myorder">我的订单</el-dropdown-item>
                                <el-dropdown-item to="/userinfo">账号资料</el-dropdown-item>
                                <el-dropdown-item to="/address">收货地址</el-dropdown-item>
                                <el-dropdown-item to="/shserver">售后服务</el-dropdown-item>
                                <el-dropdown-item to="/myyh">我的优惠</el-dropdown-item> -->
                                <!-- <el-dropdown-item @click="loginout">退出</el-dropdown-item> -->
                              </el-dropdown-menu>
                            </el-dropdown>
                            <span class="el-dropdown-link" @click="islogin"  v-if="$store.state.islogin==false">
                                <i class="el-icon-setting el-icon--right"></i>
                            </span>
                                     
                       
                      </div> 
                </div>
              </div>
        </div>
        <div class="breadList">
         <div class="m-c-t mg-t10" >
            <el-breadcrumb separator-class="el-icon-arrow-right" >
                    <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
                    <el-breadcrumb-item to="/all">全部商品</el-breadcrumb-item>
                    <el-breadcrumb-item to="/ppzb">品牌周边</el-breadcrumb-item>
                    <el-breadcrumb-item to="/jzmd">捐赠名单</el-breadcrumb-item>
            </el-breadcrumb>
         </div>     
        </div>
      </el-col>
    </el-row>

</header>


</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
      return {
        seachVal:'',
        settingList:["我的订单","账号资料","收货地址","售后服务","我的优惠","退出"],
        routerAddress:["/myorder","/userinfo","/address","/shserver","/myyh","/home"]
      }
    },
    computed:{
     
    },
    methods:{
      ...mapMutations(["login"]),
      islogin(){
        this.$confirm('您尚未登录请登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '您已登录成功!'
          });
          this.login();
      
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消登录'
          });          
        });

      },

      seachCallBack:function(){
            console.log(this.seachVal);
      }
    }
}
</script>

<style>

</style>
