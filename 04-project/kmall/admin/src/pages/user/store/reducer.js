/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-16 16:01:31
*/

import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    list:[]
})

export default (state=defaultState,action)=>{
    if( action.type == types.SET_PAGE){
        return state.set('list',fromJS(action.payload.list))
    }
    return state
}