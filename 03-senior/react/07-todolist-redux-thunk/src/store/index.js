/*
* @Author: TomChen
* @Date:   2019-08-12 10:11:52
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 17:21:00
*/
import { createStore,applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducer.js'

//创建store

const store = createStore(reducer,applyMiddleware(thunk))
// const store = createStore(reducer)

export default store