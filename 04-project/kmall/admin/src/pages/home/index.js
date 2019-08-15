/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-15 16:54:18
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from 'common/layout'

import "./index.css"
import { actionCreator } from './store'

class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <div className="Home">
             <Layout>
                <h1>首页内容</h1>
             </Layout>
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