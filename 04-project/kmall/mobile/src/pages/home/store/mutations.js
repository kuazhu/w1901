/*
* @Author: TomChen
* @Date:   2019-09-03 19:19:12
* @Last Modified by:   TomChen
* @Last Modified time: 2019-09-04 20:34:45
*/
//唯一更改state的方法
//mutation必须是同步函数
import {GET_ADS,GET_FLOORS} from './types.js'
export default {
    [GET_ADS](state,payload){
        state.ads = payload.homeAds      
    },
    [GET_FLOORS](state,payload){
        state.floors = payload.homeFloors      
    }                       
}