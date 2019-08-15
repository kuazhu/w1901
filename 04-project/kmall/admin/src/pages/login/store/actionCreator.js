/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-15 11:52:04
*/
import axios from 'axios'
import { message } from 'antd'

import * as types  from './actionTypes.js'

import { saveUsername } from 'util'

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
            // console.log(result)
            const data  = result.data
            if(data.code == 0){
                //1.在前端保存登录信息
                saveUsername(data.data.username)
                //2.跳转到后台首页
                window.location.href = "/"
            }else{
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })       
    }
}



