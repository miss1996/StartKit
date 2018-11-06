<template>
  <div id="mAside">
    <div class="top">
      <img src="../assets/imgs/logo2.png" alt="">
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#003C64"
      text-color="#fff"
      active-text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style lang="scss" coped>
  #mAside{
    min-height:100vh;
   .top{
    width:218px;
    height:88px;
     img{
       width:218px;
     }
   }
  }
</style>
<style lang="scss">
.el-menu--inline{
  background-color:#022D49 !important;
  .el-menu-item-group,.el-menu-item{
    background-color:#022D49 !important;
  }
  .el-menu-item:hover{
    background-color:rgba(24,144,255,1);
  }
}
.el-menu{
  border-right:none !important;
  width: 217px;
}
.el-menu-item:hover{
  background:#1890FF !important;
}
.el-menu-item-group__title{
  padding:0;
}
.el-menu-item-group{
  padding:10px 0;
}
</style>

