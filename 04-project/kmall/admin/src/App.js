/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-15 11:27:32
 */
import React, { Component } from 'react'
import './App.css'

import { 
    BrowserRouter as Router, 
    Route, 
    Link,
    Switch 
} from "react-router-dom"

import TodoList from 'pages/todolist'
import Login from 'pages/login'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        )          
    }
}



export default App