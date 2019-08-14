/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-14 09:22:25
*/

import {
    ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM,
    LOAD_DATA
} from './actionTypes.js'

const defaultState = {
    list:["吃饭","睡觉"],
    task:''
}

/*
    1. reducer是一个函数,并是一个纯函数(固定的输入就会有固定的输出),主要作用是用来处理业务数据
    2. reduer需要返回一个新的state对象,不能更改参数中传递过来的state,
    原因是因为传递过来的state是store当中的state,所有组件都共享store中的state,这个state由store来维护,
    store根据reducer返回的新的state来更改自己的state,在组件中getState()返回的是store中的state
 */
export default (state=defaultState,action)=>{
    
    if(action.type == CHANGE_ITEM){
        //错误的写法
        //state.task = action.payload
        const newState = JSON.parse(JSON.stringify(state))
        newState.task = action.payload
        //不是纯函数
        // newState.task = action.payload + Date.now()
        // newState.task = action.payload + Math.random()
        return newState
    }
    if(action.type == ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.task)
        newState.task = ''
        return newState
    }
    if(action.type == DEL_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.payload,1)
        return newState        
    }
    if(action.type == LOAD_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.payload
        return newState
    }




    return state
}