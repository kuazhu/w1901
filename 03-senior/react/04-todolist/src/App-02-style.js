/*
* @Author: TomChen
* @Date:   2019-08-09 15:14:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-09 16:00:02
*/
import React,{ Component } from 'react'
import "./App.css"

class App extends Component{
    render(){
        return( 
        <div>
            <input />
            <button className="btn">提交</button>
            <ul style={{color:'red'}}>
                <li>吃饭</li>
                <li>睡觉</li>
                <li>敲代码</li>
            </ul>
        </div> 
        )             
    }
}

export default App