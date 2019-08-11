/*
* @Author: TomChen
* @Date:   2019-08-09 15:14:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-11 17:41:18
*/
import React,{ Component } from 'react'
import Item from './Item.js'

import "./App.css"

class App extends Component{
    constructor(props){
        console.log('App constructor..')
        super(props)
        this.state = {
            list:["吃饭"],
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
    }
    static getDerivedStateFromProps(props, state){
        //根据props来修改state
        console.log('App getDerivedStateFromProps(props, state):',props, state)
        //用返回的对象和当前的state合并
        /*
        return {
            task:'hello'
        }
        */
       return null
    }
    shouldComponentUpdate(nextProps, nextState){
        //根据当前新的props或者新的state来决定到底需不需要更新DOM,提高效率,避免不必要的更新
       console.log('App shouldComponentUpdate(nextProps, nextState):',nextProps, nextState) 
       // return true
       if(nextState.task == 'l'){
        return false
       }else{
        return true
       }
    }  
    getSnapshotBeforeUpdate(prevProps, prevState){
        //保存真实DOM更新前的某些数据
        console.log('App getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
        return 123
    }
    //真实的更新DOM
    componentDidUpdate(prevProps, prevState,snapshot){
        //获取真实DOM更新前的某些数据
        console.log('App componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot)
    }      
    componentDidMount(){
        //一般情况在这里发送ajax
        console.log('App componentDidMount')
    }
    handleAdd(){
        this.setState((preState)=>({
            list:[...preState.list,preState.task],
            task:''
        }),()=>{
            console.log('2::',this.ul.childNodes) 
        })
        console.log('1::',this.ul.childNodes)       
    }
    handleChange(ev){
      // console.log(this.input)    
      // const task = ev.target.value
      const task = this.input.value
      this.setState(()=>({
         task:task
      }))
    }
    handleDel(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState(()=>({
            list
        }))
    }
    getItems(){
        return this.state.list.map((item,index)=>{
          return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)} />
        })        
    }
    render(){
        console.log('App render...')
        return( 
        <div className="App">
            <input 
                onChange={this.handleChange} 
                value={this.state.task}
                ref={(input)=>{this.input = input}} 
            />
            <button onClick={this.handleAdd}>提交</button>
            <ul ref={(ul)=>{this.ul = ul}}>
                {
                    this.getItems()
                }
            </ul>
        </div> 
        )             
    }
}

export default App