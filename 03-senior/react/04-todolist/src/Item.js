/*
* @Author: TomChen
* @Date:   2019-08-09 17:42:43
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-11 10:40:37
*/
import React,{ Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props)
    }   
    render(){
        const { handleDel,task } = this.props
        return(
            <li onClick={handleDel}>{task}</li>
        )
    }
}

export default Item