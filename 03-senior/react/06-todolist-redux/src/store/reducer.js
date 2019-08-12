/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 10:58:11
*/
const defaultState = {
    list:["吃饭","睡觉","敲代码"],
    task:''
}

export default (state=defaultState,action)=>{
    
    if(action.type == 'change_item'){
        //错误的写法
        state.task = action.payload
    }

    return state
}