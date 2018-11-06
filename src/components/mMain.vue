<template>
 <div id="mMain">
   <transition name="fade" mode="out-in">
     <router-view></router-view>
   </transition>
 </div>
</template>

<script>
    export default {
      data() {
        return {
          actived:'index'
        }
      },
      methods: {
        
      },
    }
</script>

<style scoped lang="scss">
  #mMain{
    
  }
</style>

