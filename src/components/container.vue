<template>
  <el-container>
    <el-aside width="218px" style="background:#003C64;">
      <m-aside></m-aside>
    </el-aside>
    <el-container>
      <el-header height="142px;">
        <m-header></m-header>
      </el-header>
      <el-main style="background:rgba(236,237,239,1);"><m-main></m-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
  import mAside from './mAside' //左侧导航
  import mHeader from './mHeader' //头部
  import mMain from './mMain'
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    components:{
      mHeader,
      mAside,
      mMain
    }
  };
</script>

<style>
  .el-header {
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 4px 0px rgba(0,21,41,0.12);
    line-height: 88px;
    padding: 0;
  }
  .el-main{
    padding:0;
  }
</style>