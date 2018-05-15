<template>
<div id="particles">
    
  <div class="loginForm" >
    <h1 style="color:#fff;text-align:center;">登录</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">

      <div class="margin20">
              <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
        
      </div>

      <div class="margin20">
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
        
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>

</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
import particles from 'particles.js'
import lzdata from './lzdata'
export default {
      data(){
        return {

        ruleForm: {
          name: '',
          pwd: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
           pwd: [
            { required: true, message: '请输入密码', trigger: 'change' },
             { min: 6, max: 20, message: '长度在 6 到 20个字符', trigger: 'blur' }
          ]
        }

        }
      },
      methods:{
         ...mapMutations(["login"]),
            submitForm(formName) {
              var self=this;
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    self.login();
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
              },
              resetForm(formName) {
                this.$refs[formName].resetFields();
              }
      
       
      
      },
      mounted(){
          particlesJS('particles',lzdata);
      }
}
</script>

<style>

#particles {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        width: 100%; 
        z-index: -1;
        background-color: #2D2D2D;

    }
body{
  overflow-x: hidden;
  overflow-y: hidden;
}

</style>
