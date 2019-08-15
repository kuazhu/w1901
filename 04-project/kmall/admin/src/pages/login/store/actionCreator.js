/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-15 11:10:45
*/
import axios from 'axios'

import * as types  from './actionTypes.js'

export const getChangeItemAction = (task)=>({
    type:types.CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:types.ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: types.DEL_ITEM,
    payload: index   
})


const getLoadInitDataAction = (payload)=>({
    type:types.LOAD_DATA,
    payload
})

export const getLoginAction = (values)=>{
    return (dispatch,getState)=>{
        values.role = 'admin'
        axios({
            method: 'post',
            url:'http://127.0.0.1:3000/sessions/users',
            data:values
        })
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log('err:',err)
        })       
    }
}



