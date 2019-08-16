/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-16 15:28:31
*/

import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    list:[
        {
            _id:1,
            username:'admin',
            isAdmin:false,
            phone:13512344321,
            email:'test@kuazhu.com',
            createdAt:'2019-08-16 11:12:45'
        }
    ]
})

export default (state=defaultState,action)=>{

    return state
}