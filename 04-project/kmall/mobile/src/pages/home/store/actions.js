/*
* @Author: TomChen
* @Date:   2019-09-03 19:18:29
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-03 20:43:15
*/
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作
import {ADD_TODO,DEL_TODO,SELECT_ALL_TODO,DEL_ALL_DONE} from './types.js'
export default {
    [ADD_TODO]({commit},todo){
        commit(ADD_TODO,todo)
    },
    [DEL_TODO]({commit},index){
        commit(DEL_TODO,index)
    },
    [SELECT_ALL_TODO]({commit},value){
        commit(SELECT_ALL_TODO,value)
    },
    [DEL_ALL_DONE]({commit}){
        commit(DEL_ALL_DONE)
    },              
}