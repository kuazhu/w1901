/*
* @Author: TomChen
* @Date:   2019-09-04 18:12:27
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-04 18:59:26
*/
//1.引入模块
import Vue from "vue"
import VueRouter from "vue-router"

//2.引入页面组件
import Home from 'pages/home'
import Cart from 'pages/cart'
import Me from 'pages/me'

//3.声明使用
Vue.use(VueRouter)


//4.导出路由对象
export default new VueRouter({
    routes:[
        {path:"/home",component:Home},
        {path:"/cart",component:Cart},
        {path:"/me",component:Me},
        {path:"/",redirect:"/home"},
    ]
})
