<template>
    <div class="TabBar">
        <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
          <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name:'TabBar', 
        data() {
            return {
                active: 0
            }
        }              
    }
</script>

<style>
  
</style>