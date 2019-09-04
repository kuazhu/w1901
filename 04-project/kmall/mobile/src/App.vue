<!--模版-->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    export default {
        name:'App',
        //2.注册组件
        components:{

        }
    }
</script>

<!--样式-->
<style lang="less">
    #app{
        p{
            color:red;
            .rem(padding,10px);
        }
    }
</style>