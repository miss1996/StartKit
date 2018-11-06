<template>
  <div id="index">
    <div class="top-info">
      <p class="title">首页</p>
      <div class="main-info">
        <div class="left-box">
          <div class="info-box">
            <img src="../assets/imgs/avatar.png" alt="">
          </div>
          <div class="text-box">
            <p class="p1">早安，{{user_name}}，再忙碌也不要忘记多喝水哟</p>
            <p class="p2">{{user_identity}}<span>|</span>{{user_position}}</p>
          </div>
        </div>
        <div class="right-box">
          <div class="item">
            <p class="item-name">代派单</p>
            <p class="item-num">18</p>
          </div>
           <div class="item">
            <p class="item-name">总订单量</p>
            <p class="item-num">6,869</p>
          </div>
        </div>
      </div>
    </div>
    <el-row :gutter="24">
      <el-col :span="16">
        <div class="grid-content left-active">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span class="card_title">动态</span>
              <span style="float:right;" class="more">more<i class="el-icon-arrow-right"></i></span>
            </div>
            <div v-for="(item,index) in noteList" :key="index" class="card-item">
             <p class="left-note">
               <img :src="item.avatar" alt="">
             </p>
             <div class="right-note">
               <p class="text1">{{item.company}} 在 {{item.platform}} {{item.option}} {{item.do}}</p>
               <p class="text2">{{item.time}}</p>
             </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content right-active">
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span class="card_title">访问量</span>
            </div>
            <div class="">
              
            </div>
          </el-card>
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span class="card_title">支付数量</span>
            </div>
            <div>
              
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        user_name:'李XX',
        user_identity:'平台超级管理',
        user_position:'iKeep超管',
        noteList:[
          {avatar:require('../assets/imgs/avatar.png'),company:'XX公司',platform:'代记账',option:'订购了三个月企业记账服',do:'请派单',time:'2分钟前'},
          {avatar:require('../assets/imgs/avatar.png'),company:'XX公司',platform:'代记账',option:'订购了三个月企业记账服',do:'请派单',time:'2分钟前'},
          {avatar:require('../assets/imgs/avatar.png'),company:'XX公司',platform:'代记账',option:'订购了三个月企业记账服',do:'请审核',time:'一周前'},
          {avatar:require('../assets/imgs/avatar.png'),company:'XX公司',platform:'代记账',option:'订购了三个月企业记账服',do:'请派单',time:'三个月前'},
          {avatar:require('../assets/imgs/avatar.png'),company:'XX公司',platform:'代记账',option:'订购了三个月企业记账服',do:'请派单',time:'2分钟前'},
          {avatar:require('../assets/imgs/avatar.png'),company:'XX公司',platform:'代记账',option:'订购了三个月企业记账服',do:'请派单',time:'2分钟前'}
        ]
      }
    },
    methods: {
     
    }
  };
</script>

<style lang="scss" scoped>
#index{
  padding:24px;
  .top-info{
    height:150px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(213,213,213,0.5);
    border-radius:5px;
    padding:15px 24px;
    box-sizing: border-box;
    .title{
      font-size:14px;
      font-family:MicrosoftYaHei;
      color:rgba(51,51,51,1);
      line-height:22px;
      letter-spacing:1px;
    }
    .main-info{
      overflow: hidden;
      .left-box{
        float: left;
        margin-top:17px;
        .info-box{
          width:72px;
          height:72px;
          border-radius: 50%;
          float:left;
          img{
            display: inline-block;
            width:72px;
            height:72px;
            vertical-align: middle;
          }
        }
        .text-box{
          float:left;
          margin-left:24px;
          .p1{
            font-size:20px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:28px;
            letter-spacing:1px;
          }
          .p2{
            font-size:14px;
            font-family:MicrosoftYaHei;
            color:rgba(153,153,153,1);
            line-height:22px;
            letter-spacing:1px;
            margin-top:17px;
          }
          span{
            margin:0 5px;
            color:rgba(234,234,234,1);
          }
        }
      }
      .right-box{
        float: right;
        overflow: hidden;
        margin-top:20px;
        .item{
          float:left;
          padding:0 34px;
          border-right:1px solid rgba(234,234,234,1);
          .item-num{
            height:38px;
            font-size:30px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:38px;
            text-align: center;
          }
          .item-name{
            height:22px;
            font-size:14px;
            font-family:MicrosoftYaHei;
            color:rgba(153,153,153,1);
            line-height:22px;
            text-align: center;
          }
          &:last-child{
            border-right:none
          }
        }
      }
    }
  }
  .grid-content{
    margin-top:24px;
  }
  .left-active{
    background: #fff;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(213,213,213,0.5);
    border-radius:5px;
  }
  .card_title{
    font-size:18px;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:24px;
    letter-spacing:1px;
  }
  .more{
    font-size:14px;
    font-family:MicrosoftYaHei;
    color:rgba(153,153,153,1);
    line-height:24px;
    i{
      margin-left:6px;
      vertical-align: middle;
    }
  }
  .card-item{
    height:80px;
    overflow: hidden;
    border-bottom: 1px solid rgba(232,232,232,1);
    padding:20px 0;
    box-sizing: border-box;
    .left-note{
      float:left;
      width:32px;
      height:32px;
      border-radius:50%; 
      img{
        width:32px;
        height:32px;
      }
    }
    .right-note{
      float:left;
      margin-left:16px;
      .text1{
        font-size:15px;
        font-family:MicrosoftYaHei;
        color:#666;
        line-height:22px;
        letter-spacing:1px;
      }
      .text2{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:22px;
      }
    }
  }
}
</style>
<style lang="scss">
#index{
  .el-card__body{
    padding-top:0;
    padding-bottom:50px;
  }
  .box-card{
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 5px 0px rgba(213,213,213,0.5);
    border-radius:5px;
  }
}
</style>


