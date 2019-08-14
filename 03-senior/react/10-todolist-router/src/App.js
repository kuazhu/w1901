/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-14 15:44:42
 */
import React, { Component } from 'react'
import './App.css'

import { 
    // BrowserRouter as Router, 
    HashRouter as Router, 
    Route, 
    Link 
} from "react-router-dom"

import TodoList from './pages/todolist'

class Home extends Component{
    render(){
        return <h2>this is home page</h2>
    }
}


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/todolist">TodoList</Link></li>
                            <li><Link to="/about">about</Link></li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/todolist" component={TodoList} />
                    <Route path="/about" render={()=><h2>this is about page</h2>} />
                </div>
            </Router>
        )          
    }
}



export default App