/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-15 15:42:48
*/
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer } from 'pages/login/store'
import { reducer as homeReducer } from 'pages/home/store'

export default combineReducers({
    login:loginReducer,
    home:homeReducer,
})
