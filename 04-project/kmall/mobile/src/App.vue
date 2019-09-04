<!--模版-->
<template>
    <div id="app">
        <router-view></router-view>
        <TabBar />
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    import TabBar from './components/tab-bar'
    export default {
        name:'App',
        //2.注册组件
        components:{
            TabBar
        }
    }
</script>

<!--样式-->
<style lang="less">

</style>