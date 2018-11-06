<template>
  <div id="accDispatchDetail">
    <div class="detail-title">派单详情</div>
    <div class="detail-container">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="项目服务：代理记账" name="1" >
        <el-form ref="form1" v-model="orderForm" label-width="120px" size="medium">
            <el-row>
              <el-col :span="8">
                <el-form-item label="订单编号：">
                  <el-input v-model="orderForm.number" placeholder="iK-20180901-666" :disabled="true"></el-input>  
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="订单创建时间：">
                  <el-input v-model="orderForm.date" placeholder="2018-09-01 12:00" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="公司名称：">
                  <el-input v-model="orderForm.name" placeholder="北京iKeep牛牛帮有限公司" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
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
              <el-col :span="8">
                <el-form-item label="注册地址：">
                  <el-input v-model="orderForm.RegisterAddress" placeholder="北京市朝阳区建外soho16-2303" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="经营地址：">
                  <el-checkbox v-model="orderForm.checked" disabled>同注册地址</el-checkbox>
                  <el-input v-model="orderForm.address" placeholder="北京市朝阳区建外soho16-2303" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="结算期限：">
                  <el-input v-model="orderForm.deadline" placeholder="年度" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="结算金额：">
                  <el-input v-model="orderForm.amount" placeholder="￥5000.00" :disabled="true"></el-input>
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
              <el-col :span="16">
                <el-form-item label="备注：">
                  <el-input v-model="orderForm.remark" placeholder="请联系这个号码吧" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="服务网点1：" name="2" style="position:relative;">
            <span style="position: absolute;top:10px;right:35px;">
              <button>派单</button>
              <button>审核</button>
            </span>
            <el-form ref="form2" v-model="serviceForm" label-width="140px" size="medium">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="商户名称：">
                    <el-input v-model="serviceForm.client" placeholder="XXXXXXXX" :disabled="true"></el-input>  
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="服务能力：">
                    <el-input v-model="serviceForm.ability" placeholder="19/20" :disabled="true"></el-input>  
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="信誉级别：">
                    <el-input v-model="serviceForm.creditRating" placeholder="85" :disabled="true"></el-input>  
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                    <el-form-item label="服务类别：">
                      <el-input v-model="serviceForm.category" placeholder="记账，工商注册，报税，刻章" :disabled="true"></el-input>  
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="支付金额信息返回：">
                      <el-input v-model="serviceForm.sureOrNo" placeholder="支持" :disabled="true"></el-input>  
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="备注：">
                      <el-input v-model="serviceForm.remark " placeholder="优质服务" :disabled="true"></el-input>  
                    </el-form-item>
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
          date: '',
          name: '',
          contacts: '',
          phoneNum: '',
          RegisterAddress: '',
          address:'',
          deadline:'',
          amount:'',
          remark:'',
          checked:true
        },
        serviceForm:{
          client:'',
          ability:'',
          creditRating:'',
          category:'',
          sureOrNo:'',
          remark:''
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
#accDispatchDetail{
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
  #accDispatchDetail .el-collapse-item__arrow{
    float:left;
    line-height: 30px;
  }
  #accDispatchDetail .el-collapse-item__header{
    font-size:16px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(0,0,0,0.85);
    line-height:50px;
    letter-spacing:1px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  #accDispatchDetail .el-collapse-item{
    background-color: #fff;
    padding: 18px 0 0 25px;
    margin-bottom: 24px;
  }
  #accDispatchDetail .el-collapse-item__header.is-active{
    border-bottom: 1px solid #E9E9E9;
  }
  #accDispatchDetail .el-collapse-item__wrap{
    padding-right: 26px;
  }
</style>


