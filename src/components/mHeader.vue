<template>
  <div id="mHeader">
      <div style="height:88px; border-bottom: 1px solid #ECEEEF;padding: 0 50px;">
        <el-col :span="16">
          <img src="../assets/imgs/cName.png" alt="" style="height:25px;">
        </el-col>
        <el-col :span="8" class="right-col">
          <div class="main-box">
            <el-badge :value="3" class="item">
              <img src="../assets/imgs/bell.svg" alt="">
            </el-badge>
            <div class="inline avatar-info">
              <p class="avatar-box inline ">
                <img src="../assets/imgs/avatar.png" alt="" class="avatar">
              </p>
              <span class="text">{{userName}}</span>
            </div>
            <span class="inline">
              <img src="../assets/imgs/out.svg" alt="">
              <span class="text">退出</span>
            </span>
          </div>
        </el-col>
      </div>
      
      <div style="float: left;">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: 'accOrderList'}">新财税订单管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: 'accOrderDetail'}">新财税订单详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div style="float: right;">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">返回上一级</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/'}">返回首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
         cName:'企业数字化自成长平台',
         userName:'李XX',
         crumbList:[
           {},
           {}
         ]
      }
    }
  };
</script>

<style lang="scss" coped>
  #mHeader{
    .inline{
      display: inline-block;
    }
    .main-box{
      float:right;
    }
    .item{
      display: inline;
    }
    .avatar-info{
      margin-left:40px;
      margin-right:30px;
    }
    .avatar-box{
      width:25px;
      height:25px;
      border-radius: 50%;
    }
    .avatar{
      width:25px;
      height:25px;
    }
    img{
      vertical-align: middle;
      margin-top:-6px;
    }
    .text{
      font-size:16px;
      font-family:MicrosoftYaHei;
      color:rgba(51,51,51,1);
      line-height:30px;
      letter-spacing:1px;
      margin-left:8px;
      display: inline-block;
      margin-top:32px;
    }
  }
</style>

<style type="text/css">
.el-breadcrumb{
  margin-top: -5px;
  height: 53px;
  line-height: 53px;
  padding: 0 50px;
}
</style>
