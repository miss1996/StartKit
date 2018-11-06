<template>
  <div id="login">
    <div class="login-container">
      <div class="login-left"><img src="../assets/imgs/logo.png" alt=""></div>
      <div class="login-right">
        <p>运营管理平台</p>
        <div>
          <input v-model="Input.account" placeholder="请输入账号" class="accountIcon" @focus="Error.account=false">
          <span class="accountNote" v-if="Error.account">请输入账号</span>
        </div>
        <div>
          <input v-model="Input.password" placeholder="请输入密码" class="passwordIcon" @focus="Error.password=false">
          <span class="passwordNote" v-if="Error.password">请输入密码</span>
        </div>
        <div class="remeberPassword">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <span>忘记密码？</span>
        </div>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        checked: true,
        Input:{
          account: '',
          password:''
        },
        Error:{
          account: false,
          password: false
        }
      }
    },
    methods: {
      login(){
        if(this.Input.account == ''){
          this.Error.account = true;
        }
        if(this.Input.password == ''){
          this.Error.password = true;
        }
      }
    }
  };
</script>
  

<style type="text/css">
  .el-button--primary{
    width:340px;
    height:61px;
    background:rgba(24,144,255,1);
    border-radius:5px;
    font-size:18px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:24px;
    letter-spacing:1px;
    margin: 55px 0 127px 54px;
  }
  .el-checkbox__label{
    font-size:16px;
    font-family:MicrosoftYaHei;
    color:rgba(153,153,153,1);
    line-height:21px;
    letter-spacing:1px;
  }
</style>

<style lang="scss" scoped>
#login{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /*background-image:url("../assets/imgs/bg.png");*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .login-container{
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -376px;
    margin-top: -320px;
    .login-left{
      width:302px;
      height:639px;
      background:rgba(24,144,255,.6918);
      img{
        width: 196px;
        height: 78px;
        margin-top: 103px;
        margin-left: 52px;
      }
    }
    .login-right{
      width: 450px;
      height: 639px;
      background-color:#fff;
      position: relative;
      P{
        font-size:18px;
        font-family:MicrosoftYaHei-Bold;
        font-weight:bold;
        color:rgba(24,144,255,1);
        line-height:24px;
        letter-spacing:1px;
        margin: 104px 0 83px 154px;
      }
      .accountIcon{
        background:url("../assets/imgs/账号.svg") no-repeat 10px center;
      }
      .passwordIcon{
        background:url("../assets/imgs/密码.svg") no-repeat 10px center;
      }
      .accountNote{
				color:#E61E1E;
				font-size:16px;
				position: absolute;
				top: 274px;
				left:114px;
			}
      .passwordNote{
				color:#E61E1E;
				font-size:16px;
				position: absolute;
				top: 360px;
				left:114px;
			}
      input{
        width:272px;
        height:61px;
        border-radius:5px;
        opacity:0.4943;
        border:2px solid #CDCDCD;
        margin: 0 0 20px 54px;
        font-size:22px;
        font-family:MicrosoftYaHei;
        color:rgba(153,153,153,1);
        line-height:29px;
        letter-spacing:1px;
        padding-left: 58px;
      }
      .remeberPassword{
        width: 340px;
        height: 21px;
        margin-left: 54px;
        display: flex;
        justify-content: space-between;
        span{
          font-size:16px;
          font-family:MicrosoftYaHei;
          color:rgba(153,153,153,1);
          line-height:21px;
          letter-spacing:1px;
          color: #3FA3FF;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }   
  }
  
}
</style>