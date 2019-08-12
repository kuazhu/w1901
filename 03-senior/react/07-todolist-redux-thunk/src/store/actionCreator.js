/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 17:23:07
*/
import axios from 'axios'

import {
    ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM,
    LOAD_DATA
} from './actionTypes.js'

export const getChangeItemAction = (task)=>({
    type: CHANGE_ITEM,
    payload: task    
})

export const getAddItemAction = ()=>({
    type:ADD_ITEM
})

export const getDelItemAction = (index)=>({
    type: DEL_ITEM,
    payload: index   
})


const getLoadInitDataAction = (payload)=>({
    type:LOAD_DATA,
    payload
})

export const getRequestInitDataAction = ()=>{
    return (dispatch,getState)=>{
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })        
    }
}



