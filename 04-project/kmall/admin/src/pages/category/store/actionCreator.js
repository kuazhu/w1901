/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-18 10:50:31
*/
import api from 'api'
import { message } from 'antd'

import * as types  from './actionTypes.js'

import { saveUsername } from 'util'

const getPageReqestStartAction = ()=>({
    type:types.PAGE_REQEST_START,
})
const getPageReqestDoneAction = ()=>({
    type:types.PAGE_REQEST_DONE,
})

const getSetPageAction = (payload)=>({
    type:types.SET_PAGE,
    payload
})

export const getAddAction = (values)=>{
    return (dispatch,getState)=>{
        api.addCategories(values)
        .then(result=>{
            console.log(result)
            /*
            if(result.code == 0){
                dispatch(getSetPageAction(result.data))
            }else{
                message.error('获取首页数据失败,请稍后再试')
            }
            */
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })              
    }
}



