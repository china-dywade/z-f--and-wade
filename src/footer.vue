<template>
  <div class="footer">
     <div class="m-c-t">
              <div class="lmlist">
                   <el-row>
                    <el-col :span="4">订单服务</el-col>
                    <el-col :span="4">服务支持</el-col>
                    <el-col :span="4">自助服务</el-col>
                    <el-col :span="4">其他项目</el-col>
                    <el-col :span="4">友情链接</el-col>
                    <el-col :span="4">关注我吧</el-col>
                  </el-row>
                </div>
                <div class="ullist">
                   <el-row>
                    <el-col :span="4">
                      <ul>
                        <li>购买指南</li>
                        <li>支付方式</li>
                        <li>送货政策</li>
                      </ul>
                    </el-col>
                    <el-col :span="4">
                      <ul>
                        <li>官方开源</li>
                        <li>项目前端</li>
                        <li>项目后端</li>
                      </ul>
                    </el-col>
                    <el-col :span="4">
                      <ul>
                        <li>个人博客</li>
                        <li>个人简介</li>
                        <li>个人视频</li>
                      </ul>
                    </el-col>
                    <el-col :span="4">
                      <ul>
                        <li>XPay支付系统</li>
                        <li>数据共享</li>
                        <li>待开发...</li>
                      </ul>
                    </el-col>
                    <el-col :span="4">
                      <ul>
                        <li>宇cccc</li>
                        <li>Smartisan</li>
                        <li>Vue</li>
                      </ul>
                    </el-col>
                    <el-col :span="4">
                      <ul>
                        <li>腾讯 QQ</li>
                        <li>新浪微博</li>
                        <li>官方邮箱</li>
                      </ul>
                    </el-col>
                  </el-row>
                </div>
                <div class="footer-btm">
                        <p>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</p>
                        <div>
                          蜀ICP备16030308号-1 蜀ICP证16030308号
                        </div>
                </div>

     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.lmlist{
  margin: 60px 0px 20px 0px;
    color: #646464;
    font-size: 12px;
    cursor: pointer;
}
.ullist li{
    color: #c3c3c3;
    font-size: 12px;
    padding: 6px 0;
    cursor: pointer;
}
  .footer-btm{
    width: 100%;
    border-top:1px solid #e6e6e6;
    padding-top: 30px;
    margin-top:30px;
  }
  .footer-btm p{
    font-size: 12px;
    line-height: 15px;
    color: #757575;
    margin-bottom: 20px;
  }
    .footer-btm div{
    line-height:1;
    color: #bdbdbd;
    font-size: 12px;
  }
</style>
