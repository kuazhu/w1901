/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-15 09:54:31
*/
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducer as todolistReducer } from 'pages/todolist/store'
import { reducer as loginReducer } from 'pages/login/store'

export default combineReducers({
    todolist:todolistReducer,
    login:loginReducer,
})
