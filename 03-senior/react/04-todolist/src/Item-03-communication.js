/*
* @Author: TomChen
* @Date:   2019-08-09 17:42:43
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-11 10:18:13
*/
import React,{ Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props)
    }
    /*
    handleDel(index){
        console.log('index',index)
        console.log(this.props.list)
        this.props.list.splice(index,1)
        console.log(this.props.list)
    }
    */    
    render(){
        return(
            //<li onClick={this.handleDel.bind(this,this.props.index)}>{this.props.task}</li>
            <li onClick={this.props.handleDel}>{this.props.task}</li>
        )
    }
}

export default Item