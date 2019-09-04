/*
* @Author: TomChen
* @Date:   2019-09-03 19:20:44
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-04 19:44:55
*/
//store的出口文件
import Vue from 'vue'
import Vuex from 'vuex'

import home from 'pages/home/store'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home:home
    }
})
