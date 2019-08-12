/*
* @Author: TomChen
* @Date:   2019-08-12 10:11:52
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 10:29:53
*/
import { createStore } from 'redux'

import reducer from './reducer.js'

//创建store

const store = createStore(reducer)

export default store