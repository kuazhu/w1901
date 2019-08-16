/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-16 09:54:22
*/
import axios from 'axios'
import { message } from 'antd'

import * as types  from './actionTypes.js'

import { saveUsername } from 'util'

const getSetCountAction = (payload)=>({
    type:types.SET_COUNT,
    payload
})

export const getCountAction = (values)=>{
    return (dispatch,getState)=>{
        axios({
            method: 'get',
            url:'http://127.0.0.1:3000/counts/',
            withCredentials:true
        })
        .then(result=>{
            const data  = result.data
            if(data.code == 0){
                dispatch(getSetCountAction(data.data))
            }else{
                message.error('获取首页数据失败,请稍后再试')
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })     
    }
}



