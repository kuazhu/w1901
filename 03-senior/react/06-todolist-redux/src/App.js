/*
* @Author: TomChen
* @Date:   2019-08-09 15:14:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-12 10:16:26
*/
import React,{ Component } from 'react'

import store from './store'

import { Button,Input,Row,Col,List } from 'antd';

import "./App.css"

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:["吃饭","睡觉"],
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd=this.handleAdd.bind(this)


        console.log(store)
    }
    handleAdd(){
        this.setState((preState)=>({
            list:[...preState.list,preState.task],
            task:''
        }))
    }
    handleChange(ev){
      const task = ev.target.value
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
        return( 
        <div className="App">
            <Row>
                <Col span={18}>
                    <Input 
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                </Col>
                <Col span={6}>
                    <Button 
                        type="primary"
                        onClick={this.handleAdd}
                    >
                        Primary
                    </Button>
                </Col>
            </Row>
            <List
              style={{marginTop:10}}
              bordered
              dataSource={this.state.list}
              renderItem={(item,index) => (
                <List.Item
                    onClick={this.handleDel.bind(this,index)}
                >
                   {item}
                </List.Item>
              )}
            />
            
        </div> 
        )             
    }
}

export default App