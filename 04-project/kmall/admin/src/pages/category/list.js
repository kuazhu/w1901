/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-18 16:49:50
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Table,Button,Input } from 'antd'
import moment from 'moment'
import { 
    Link, 
} from "react-router-dom"
import Layout from 'common/layout'

import "./index.css"
import { actionCreator } from './store'


class CategoryList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.handlePage(1)
    }    
    render() {
        const { 
            list,
            current,
            total,
            pageSize,
            handlePage,
            isFetching,
            handleUpdateName 
        } = this.props
        const columns = [{
                title: '分类名称',
                dataIndex: 'name',
                width:'40%',
                key: 'name',
                render:(name,record)=><Input 
                    style={{width:'60%'}}
                    defaultValue={name}
                    onBlur={
                        (ev)=>{
                            if(ev.target.value != name){
                                handleUpdateName(record._id,ev.target.value)    
                            }
                        }
                    }
                />
            },
            {
                title: '手机分类名称',
                dataIndex: 'mobileName',
                key: 'mobileName',
            },
            {
                title: '是否显示',
                dataIndex: 'isShow',
                key: 'isShow',
            },
            {
                title: '排序',
                dataIndex: 'order',
                key: 'order',
            },
        ]        
        const dataSource = list.toJS()        
        return (
            <div className="User">
             <Layout>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                  <Breadcrumb.Item>分类列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginBottom:16,height:40}} className='claerfix'>
                    <Link to="/category/add" style={{float:'right'}}>
                        <Button type="primary">
                            添加分类
                        </Button>
                    </Link>
                </div>
                <div className="content">
                    <Table 
                        dataSource={dataSource} 
                        columns={columns}
                        pagination={{
                            current:current,
                            total:total,
                            pageSize:pageSize
                        }}
                        onChange={
                            (page)=>{
                                handlePage(page.current)
                            }
                        }
                        loading={
                            {
                                spinning:isFetching,
                                tip:'数据正在努力的加载中'
                            }
                        }
                    />                                   
                </div>
             </Layout>
        </div>
        );
    }
}

//映射属性到组件
const mapStateToProps = (state) => ({
    list:state.get('category').get('list'),
    current:state.get('category').get('current'),
    total:state.get('category').get('total'),
    pageSize:state.get('category').get('pageSize'), 
    isFetching:state.get('category').get('isFetching'),  
})
//映射方法到组件
const mapDispatchToProps = (dispatch) =>({
    handlePage:(page)=>{
        dispatch(actionCreator.getPageAction(page))
    },
    handleUpdateName:(id,newName)=>{
        dispatch(actionCreator.getUpdateNameAction(id,newName))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)