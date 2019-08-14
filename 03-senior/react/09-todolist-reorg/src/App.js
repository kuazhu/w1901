/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-14 10:37:14
 */
import React, { Component } from 'react'
import './App.css'


import TodoList from './pages/todolist'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoList />
            </div>
        )          
    }
}



export default App