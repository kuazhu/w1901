/*
* @Author: TomChen
* @Date:   2019-08-09 17:42:43
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-11 17:27:27
*/
import React,{ Component } from 'react'

import PropTypes from 'prop-types'

class Item extends Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        //清理工作,比如关闭定时间
        console.log('componentWillUnmount()')
    }   
    render(){
        const { handleDel,task } = this.props
        return(
            <li onClick={handleDel}>{task}</li>
        )
    }
}

Item.propTypes = {
    handleDel:PropTypes.func,
    task:PropTypes.string.isRequired
}
Item.defaultProps = {
    task:'learn...'
}








export default Item