/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-19 16:22:43
*/

import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    categories:[],
    isFetching:false,
    list:[],
    current:1,
    total:0,
    pageSize:0,

    mainImage:'',
    images:'',
    detail:''    
})

export default (state=defaultState,action)=>{
    if( action.type == types.SET_PAGE){
        return state.merge({
            list:fromJS(action.payload.list),
            current:action.payload.current,
            total:action.payload.total,
            pageSize:action.payload.pageSize            
        })
    }
    if(action.type == types.PAGE_REQEST_START){
        return state.set('isFetching',true)
    }
    if(action.type == types.PAGE_REQEST_DONE){
        return state.set('isFetching',false)
    }
    if(action.type == types.SET_CATEGORIES){
        return state.set('categories',fromJS(action.payload))
    }
    if(action.type == types.SET_MAIN_IMAGE){
        return state.set('mainImage',action.payload)
    }
    if(action.type == types.SET_IMAGES){
        return state.set('images',action.payload)
    }
    if(action.type == types.SET_DETAIL){
        return state.set('detail',action.payload)
    }    
    return state
}