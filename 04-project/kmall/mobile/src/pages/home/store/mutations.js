/*
* @Author: TomChen
* @Date:   2019-09-03 19:19:12
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-03 20:44:02
*/
//唯一更改state的方法
//mutation必须是同步函数
import {ADD_TODO,DEL_TODO,SELECT_ALL_TODO,DEL_ALL_DONE} from './types.js'
export default {
    [ADD_TODO](state,todo){
        state.todos.unshift(todo)
    },
    [DEL_TODO](state,index){
        state.todos.splice(index,1)
    },
    [SELECT_ALL_TODO](state,value){
        state.todos.forEach((item)=>{
            item.done = value
        })        
    },
    [DEL_ALL_DONE](state){
        state.todos = state.todos.filter(item=>!item.done)       
    }             
}