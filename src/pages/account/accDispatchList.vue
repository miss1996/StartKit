<template>
  <div id="accDispatchList">
    <div class="orderTitle">派单列表</div>
    <!--表单-->
    <el-form ref="form" v-model="orderForm" label-width="120px" size="medium">
      <el-row>
        <el-col :span="8">
          <el-form-item label="订单编号：">
            <el-input v-model="orderForm.number" placeholder="请输入"></el-input>  
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="公司名称：">
            <el-input v-model="orderForm.name" placeholder="请输入关键字"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="日期：">
            <el-date-picker
              v-model="orderForm.date"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="服务类别：">
            <el-select v-model="orderForm.category" placeholder="请选择">
              <el-option label="类别一" value="leibie1"></el-option>
              <el-option label="类别二" value="leibie2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="服务期限：">
            <el-select v-model="orderForm.deadline" placeholder="请选择">
              <el-option label="期限一" value="qixian1"></el-option>
              <el-option label="期限二" value="qixian2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="订单状态：">
            <el-select v-model="orderForm.state" placeholder="请选择">
              <el-option label="状态一" value="zhuangtai1"></el-option>
              <el-option label="状态二" value="zhuangtai2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="派单状态：">
            <el-select v-model="orderForm.dispachState" placeholder="请选择">
              <el-option label="派单状态一" value="paidanzhuangtai1"></el-option>
              <el-option label="派单状态二" value="paidanzhuangtai2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8" :push="8">
          <el-form-item size="large">
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <el-button type="primary" @click="handleExport">导出</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!--表格-->
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="number" label="订单编号" width="200%"></el-table-column>
      <el-table-column prop="category" label="服务类别" width="200%"></el-table-column>
      <el-table-column  prop="deadline" label="服务期限" width="200%"></el-table-column>
      <el-table-column  prop="name" label="公司名称" width="200%"></el-table-column>
      <el-table-column  prop="state" label="订单状态" width="200%">
        <template slot-scope="scope">
          <span><span :class="{'green':scope.row.type==1,'blue':scope.row.type==2,'yellow':scope.row.type==3,'gray':scope.row.type==4}">●</span>{{scope.row.state}}</span>
        </template>
      </el-table-column>
      <el-table-column  prop="dispachState" label="派单状态" width="200%">
        <template slot-scope="scope">
          <el-tag
            :type="(scope.row.dispachState == '待派单' || scope.row.dispachState == '待审核' || scope.row.dispachState == '待接单')?'danger':'success'"
            disable-transitions>{{scope.row.dispachState}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column  prop="date" label="订单创建时间" sortable width="200%"></el-table-column>
      <el-table-column label="操作" width="300%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">订单详情</el-button>
          <el-button type="text" size="small">派单</el-button>
          <el-button type="text" size="small">催一下</el-button>
          <el-button type="text" size="small">撤单</el-button>
          <el-button type="text" size="small">审核</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000" style="padding: 20px 0;width:100%;background-color:#fff;text-align:right;">
    </el-pagination>
  </div>
</template>

<script>

  export default {
    data() {
      return{
        orderForm: {
          number: '',
          name: '',
          date: '',
          category: '',
          deadline: '',
          state:'',
          dispachState:''
        },
        tableData: [{
          number: 'iK-20180901-666',
          category: '小规模记账服务',
          deadline: '6个月',
          name: '北京iKeep牛牛帮有限公司',
          state: '取消订单',
          dispachState:'待派单',
          date: '2017-10-31 23:12:00'
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '一次性',
          name: '北京iKeep牛牛帮有限公司',
          state: '已支付',
          dispachState:'待审核',
          date: '2017-10-31 23:12:00',
          type: 2
        },{
          number: 'iK-20180901-666',
          category: 'IT外包服务',
          deadline: '12个月',
          name: '北京iKeep牛牛帮有限公司',
          state: '订单完成',
          dispachState:'已接单',
          date: '2017-10-31 23:12:00',
          type: 1
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '3个月',
          name: '北京iKeep牛牛帮有限公司',
          state: '未支付',
          dispachState:'待接单',
          date: '2017-10-31 23:12:00',
          type: 3
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '3个月',
          name: '北京iKeep牛牛帮有限公司',
          state: '未支付',
          dispachState:'已审核',
          date: '2017-10-31 23:12:00',
          type: 3
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '3个月',
          name: '北京iKeep牛牛帮有限公司',
          state: '取消订单',
          dispachState:'待派单',
          date: '2017-10-31 23:12:00',
          type: 4
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '一次性',
          name: '北京iKeep牛牛帮有限公司',
          state: '已支付',
          dispachState:'待派单',
          date: '2017-10-31 23:12:00',
          type: 2
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '一次性',
          name: '北京iKeep牛牛帮有限公司',
          state: '已支付',
          dispachState:'待派单',
          date: '2017-10-31 23:12:00',
          type: 2
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '一次性',
          name: '北京iKeep牛牛帮有限公司',
          state: '已支付',
          dispachState:'待派单',
          date: '2017-10-31 23:12:00',
          type: 2
        },{
          number: 'iK-20180901-666',
          category: '网络服务',
          deadline: '一次性',
          name: '北京iKeep牛牛帮有限公司',
          state: '已支付',
          dispachState:'待派单',
          date: '2017-10-31 23:12:00',
          type: 2
        }]
      }
    },
    methods: {
     handleSearch() {
        console.log('submit!');
      },
      handleExport(){

      },
      reset(){

      },
      handleClick(row) {
        console.log(row);
      }
    }
  };
</script>

<style lang="scss" scoped>
#accDispatchList{
  margin:24px;
  background-color: #fff;
  .orderTitle{
    font-size:18px;
    font-family:MicrosoftYaHei-Bold;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:55px;
    padding-left: 26px;
    border-bottom: 1px solid #E8E8E8;
  }
}
</style>

<style type="text/css">
  #accDispatchList .el-form{
    padding-top: 24px;
  }
  #accDispatchList .el-input--medium .el-input__inner{
    width: 256px;
    height: 32px;
  }
  #accDispatchList .el-range-editor--medium.el-input__inner {
    width: 256px;
    height: 32px;
  }
  #accDispatchList .el-table--fit{
    padding: 0 24px;
    background-color: #fff;
  }
  #accDispatchList .el-table tr {
    font-size:14px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(0,0,0,0.85);
    line-height:22px;
    letter-spacing:1px;
  }
  #accDispatchList .el-table__header th, .el-table__header tr {
    background-color: #F6F6F6;
  }
  #accDispatchList .el-table tr{
    font-size:14px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(0,0,0,0.65);
    line-height:22px;
    letter-spacing:1px;
  }
  #accDispatchList .el-button--text{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(24,144,255,1);
    line-height:22px;
    letter-spacing:1px;
  }
  .blue{
    color: blue;
  }
  .gray{
    color: gray;
  }
  .yellow{
    color: yellow;
  }
  .green{
    color: green;
  }
</style>


