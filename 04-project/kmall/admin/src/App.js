/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-19 09:05:46
 */
import React, { Component } from 'react'
import './App.css'

import { 
    BrowserRouter as Router, 
    Route, 
    Link,
    Switch,
    Redirect,
} from "react-router-dom"

import Login from 'pages/login'
import Home from 'pages/home'
import User from 'pages/user'
import Category from 'pages/category'
import Product from 'pages/product'
import Err from 'common/err'

import { getUsername } from 'util'

class App extends Component {    
    render() {
        const ProtectRoute = ({component:Component,...rest})=>(<Route 
            {...rest}
            render={(props)=>{
                return getUsername() ? <Component {...props} /> : <Redirect to="/login" />
            }}
        />)
        const LoginRoute = ({component:Component,...rest})=>(<Route 
            {...rest}
            render={(props)=>{
                return getUsername() ? <Redirect to="/" />  : <Component {...props} />
            }}
        />)
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <ProtectRoute exact path="/" component={Home} />
                        <ProtectRoute  path="/user" component={User}  />
                        <ProtectRoute  path="/category" component={Category}  />
                        <ProtectRoute  path="/product" component={Product}  />
                        <LoginRoute path="/login" component={Login} />
                        <Route component={Err} />
                    </Switch>
                </div>
            </Router>
        )          
    }
}



export default App