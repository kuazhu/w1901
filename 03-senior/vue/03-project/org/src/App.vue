<!--模版-->
<template>
    <div id="app">
        <!--3.使用组件-->
        <Logo />
        <Message msg="您好" />
        <p>this is home page</p>
    </div>
</template>

<!--逻辑-->
<script>
    //1.引入组件
    import Logo from './pages/Logo.vue'
    import Message from './pages/Message.vue'
    export default {
        name:'App',
        //2.注册组件
        components:{
            Logo,
            Message
        }
    }
</script>

<!--样式-->
<style>
  
</style>