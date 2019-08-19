/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-19 16:20:31
*/
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer } from 'pages/login/store'
import { reducer as homeReducer } from 'pages/home/store'
import { reducer as userReducer } from 'pages/user/store'
import { reducer as categoryReducer } from 'pages/category/store'
import { reducer as productReducer } from 'pages/product/store'

export default combineReducers({
    login:loginReducer,
    home:homeReducer,
    user:userReducer,
    category:categoryReducer,
    product:productReducer,
})
