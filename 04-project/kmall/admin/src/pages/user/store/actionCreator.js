/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-16 15:59:06
*/
import api from 'api'
import { message } from 'antd'

import * as types  from './actionTypes.js'

import { saveUsername } from 'util'

const getSetPageAction = (payload)=>({
    type:types.SET_PAGE,
    payload
})

export const getPageAction = (page)=>{
    return (dispatch,getState)=>{
        api.getUserList({
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                dispatch(getSetPageAction(result.data))
            }else{
                message.error('获取首页数据失败,请稍后再试')
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })                 
    }
}



