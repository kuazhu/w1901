/*
* @Author: TomChen
* @Date:   2019-08-09 15:14:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-09 17:48:46
*/
import React,{ Component } from 'react'
import Item from './Item.js'

import "./App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:["吃饭","睡觉","敲代码","跑步"],
            task:''
        }
    }
    handleAdd(){
        /*
        console.log(this)
        console.log('btn click...')
        console.log(this.state)
        this.state.list.push(this.state.task)
        console.log(this.state)
        */
        //数据驱动界面
        this.setState({
            list:[...this.state.list,this.state.task],
            task:''
        })       
    }
    handleChange(ev){
        /*
        console.log(ev.target.value)
        console.log(this.state)
        this.state.task = ev.target.value
        console.log(this.state)
        */
       /*
       this.setState({
            task:ev.target.value
       })
       */
      const task = ev.target.value
      this.setState(()=>({
         task:task
      }))
    }
    handleDel(index){
        // console.log(index)
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }
    render(){
        return( 
        <div className="App">
            <input onChange={this.handleChange.bind(this)} value={this.state.task} />
            <button onClick={this.handleAdd.bind(this)}>提交</button>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        /*
                        return(
                            <li 
                                key={index}
                                onClick={this.handleDel.bind(this,index)}
                            >
                                {item}
                            </li>
                        )
                        */
                       return <Item key={index} task={item} onClick={this.handleDel.bind(this,index)} />
                    })
                   // [<li>111</li>,<li>222</li>]        
                }
            </ul>
        </div> 
        )             
    }
}

export default App