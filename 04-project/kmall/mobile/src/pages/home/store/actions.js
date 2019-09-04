/*
* @Author: TomChen
* @Date:   2019-09-03 19:18:29
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-04 20:59:08
*/
//组件中用由this.$store.dispatch方法来派发action,
//action中用commit来提交mutation
//action中可以包含异步操作

import api from 'api'

import {GET_ADS,GET_FLOORS} from './types.js'
export default {

    async [GET_ADS]({commit}){
        const result = await api.getPositionAds()
        if(result.code == 0){
            commit(GET_ADS,{homeAds:result.data})
        }
    },
    async [GET_FLOORS]({commit}){
        const result = await api.getFloors()
        if(result.code == 0){
            commit(GET_FLOORS,{homeFloors:result.data})
        }
    },                        
}