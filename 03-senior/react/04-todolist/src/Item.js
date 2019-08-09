/*
* @Author: TomChen
* @Date:   2019-08-09 17:42:43
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-09 17:47:38
*/
import React,{ Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props)
    }    
    render(){
        return(
            <li>{this.props.task}</li>
        )
    }
}

export default Item