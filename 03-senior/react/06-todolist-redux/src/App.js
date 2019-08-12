/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-12 16:45:48
 */
import React, { Component } from 'react'
import axios from 'axios'

import store from './store'
/*
import {
    ADD_ITEM,
    CHANGE_ITEM,
    DEL_ITEM
} from './store/actionTypes.js'
*/

import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitDataAction
} from './store/actionCreator.js'


import AppUI from './AppUI.js'

//容器组件
class App extends Component {
    constructor(props) {
        super(props)
        /*
        this.state = {
            list:["吃饭","睡觉"],
            task:''
        }
        */
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDel = this.handleDel.bind(this)

        this.state = store.getState()
        store.subscribe(() => { this.setState(store.getState()) })
    }
    componentDidMount(){
        //发送ajax请求
      
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            // console.log(result)
            store.dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })
    
       //store.dispatch(getLoadInitDataAction())
    }
    handleAdd() {
        /*
        this.setState((preState) => ({
            list: [...preState.list, preState.task],
            task: ''
        }))
        */
       /*
        const action = {
            type:ADD_ITEM
        }
        store.dispatch(action)
        */
        store.dispatch(getAddItemAction())
    }
    handleChange(ev) {
        const task = ev.target.value
        /*
        this.setState(()=>({
           task:task
        }))
        */
        //派发action
        //action就是一个对象
        /*
        const action = {
            type: CHANGE_ITEM,
            payload: task
        }
        store.dispatch(action)
        */
       store.dispatch(getChangeItemAction(task))
    }
    handleDel(index) {
        /*
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState(() => ({
            list
        }))
        */
       /*
       const action = {
            type: DEL_ITEM,
            payload: index        
       }
       store.dispatch(action)
       */
       store.dispatch(getDelItemAction(index))
    }
    render() {
        return (
            <AppUI 
                task={this.state.task}
                list={this.state.list}
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                handleAdd={this.handleAdd}
            />
        )
    }
}

export default App