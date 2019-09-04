/*
* @Author: TomChen
* @Date:   2019-09-03 19:20:44
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-03 19:23:37
*/
//store的出口文件
import Vue from 'vue'
import Vuex from 'vuex'

import  state from './state.js'
import  mutations from './mutations.js'
import  actions from './actions.js'
import  getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
