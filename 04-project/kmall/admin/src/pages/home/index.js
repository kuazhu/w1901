/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-15 15:41:51
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import "./index.css"
import { actionCreator } from './store'

class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <div className="Home">
            Home page
        </div>
        );
    }
}

//映射属性到组件
const mapStateToProps = (state) => ({
    
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)