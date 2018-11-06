<template>
  <div id="accOrderDetail">
    <div class="detail-title">订单详情</div>
    <div class="detail-container">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="项目服务：代理记账" name="1" >
          <el-form ref="form1" v-model="orderForm" label-width="120px" size="medium">
            <el-row>
              <el-col :span="8">
                <el-form-item label="订单编号：">
                  <el-input v-model="orderForm.number" placeholder="user-01" :disabled="true"></el-input>  
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人：">
                  <el-input v-model="orderForm.contacts" placeholder="王鋆鋆" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="手机号码：">
                  <el-input v-model="orderForm.phoneNum" placeholder="13020020723" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item prop="name" label="公司名称：">
                  <el-input v-model="orderForm.name" placeholder="北京iKeep牛牛帮有限公司" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="订单创建时间：">
                  <el-input v-model="orderForm.date" placeholder="2018/09/31 12：30" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="结算期限：">
                  <el-input v-model="orderForm.deadline" placeholder="年度" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="结算金额：">
                  <el-input v-model="orderForm.amount" placeholder="￥5000.00" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="收获地址：">
                  <el-input v-model="orderForm.address" placeholder="北京市朝阳区建外soho16-2303" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="营业执照：">
                  <template slot-scope="scope">
                    <img src="../../assets/imgs/Bitmap.png" style="width: 73px; height: 105px;">
                    <a class="download">下载核对</a>
                  </template>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="服务网点：" name="2" style="position:relative;">
            <span style="position: absolute;top:10px;right:35px;">
              <button class="xinzeng">新增</button>
              <button class="save">保存</button>
            </span>
            <el-form ref="form2" v-model="serviceForm" label-width="120px" size="medium">
              <el-row>
                <el-col :span="8">
                  <span>跟单日期：</span>
                </el-col>
                <el-col :span="8">
                  <span>未支付原因：</span>
                </el-col>
                <el-col :span="8">
                  <span>跟单业务员：</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                    <el-date-picker
                      v-model="serviceForm.date"
                      type="date"
                      placeholder="20180909" :disabled="true">
                    </el-date-picker>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="serviceForm.reason" placeholder="无" :disabled="true">
                      <el-option label="原因一" value="yuanyin1"></el-option>
                      <el-option label="原因二" value="yuanyin2"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="serviceForm.person" placeholder="迪迪" :disabled="true">
                      <el-option label="业务员一" value="person1"></el-option>
                      <el-option label="业务员二" value="person2"></el-option>
                    </el-select>
                </el-col>
              </el-row>
              
            </el-form>
            
        </el-collapse-item>
      </el-collapse>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        orderForm: {
          number: '',
          contacts: '',
          phoneNum: '',
          name: '',
          date: '',
          deadline: '',
          amount:'',
          address:''
        },
        serviceForm:{
          date:'',
          reason:'',
          person:''
        },
        activeNames: ['2']
      }
    },
    methods: {
     handleChange(val) {
        // console.log(val);
      }
    }
  };
</script>

<style lang="scss" scoped>
#accOrderDetail{
  .detail-title{
    font-size:18px;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:55px;
    padding-left: 50px;
    border-bottom: 1px solid #E8E8E8;
  }
  .detail-container{
    padding: 0 23px;
    .download{
      cursor: pointer;
      margin-left: 32px;
      vertical-align:bottom;
      text-decoration: none;
      &:hover{
        color: #349EFF;
      }
    }
    span{
      font-size:14px;
      font-family:PingFangSC-Regular;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:50px;
      letter-spacing:1px;
    }
    button{
      width:46px;
      height:24px;
      border-radius:4px;
      border:1px solid;
      font-size:12px;
      font-family:MicrosoftYaHei;
      color:rgba(24,144,255,1);
      line-height:22px;
      background-color: #fff;
      outline: none;
    }
    
  }
}
</style>
<style type="text/css">
  #accOrderDetail .el-collapse-item__arrow{
    float:left;
    line-height: 30px;
  }
  #accOrderDetail .el-collapse-item__header{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(0,0,0,0.85);
    line-height:50px;
    letter-spacing:1px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  #accOrderDetail .el-collapse-item{
    background-color: #fff;
    padding: 18px 0 0 25px;
    margin-bottom: 24px;
  }
  #accOrderDetail .el-collapse-item__header.is-active{
    border-bottom: 1px solid #E9E9E9;
  }
  #accOrderDetail .el-collapse-item__wrap{
    padding-right: 26px;
  }
</style>


