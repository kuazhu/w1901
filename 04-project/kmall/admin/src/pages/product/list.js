/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-19 17:50:44
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Table,Button,Input,InputNumber,Switch } from 'antd'
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
            handleUpdateName,
            handleUpdateMobileName,
            handleUpdateOrder,
            handleUpdateIsShow 
        } = this.props
        const columns = [{
                title: '商品名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '是否首页显示',
                dataIndex: 'isShow',
                key: 'isShow',
                render:(isShow,record)=><Switch 
                    checkedChildren="显示" 
                    unCheckedChildren="隐藏" 
                    checked={isShow == '0' ? false : true}
                    onChange={
                        (checked)=>{
                            handleUpdateIsShow(record._id,checked ? '1' : '0')
                        }
                    } 
                />
            },
            {
                title: '上架/下架',
                dataIndex: 'status',
                key: 'status',
                render:(status,record)=><Switch 
                    checkedChildren="显示" 
                    unCheckedChildren="隐藏" 
                    checked={status == '0' ? false : true}
                    onChange={
                        (checked)=>{
                            handleUpdateIsShow(record._id,checked ? '1' : '0')
                        }
                    } 
                />
            },
            {
                title: '是否热卖',
                dataIndex: 'isHot',
                key: 'isHot',
                render:(isHot,record)=><Switch 
                    checkedChildren="显示" 
                    unCheckedChildren="隐藏" 
                    checked={isHot == '0' ? false : true}
                    onChange={
                        (checked)=>{
                            handleUpdateIsShow(record._id,checked ? '1' : '0')
                        }
                    } 
                />
            },                        
            {
                title: '排序',
                dataIndex: 'order',
                key: 'order',
                render:(order,record)=><InputNumber 
                    defaultValue={order}
                    onBlur={
                        (ev)=>{
                            if(ev.target.value != order){
                                handleUpdateOrder(record._id,ev.target.value)    
                            }
                        }
                    }
                />                 
            },
            {
                title:'操作'
            }
        ]        
        const dataSource = list.toJS()        
        return (
            <div className="User">
             <Layout>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                  <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginBottom:16,height:40}} className='claerfix'>
                    <Link to="/product/save" style={{float:'right'}}>
                        <Button type="primary">
                            添加商品
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
    list:state.get('product').get('list'),
    current:state.get('product').get('current'),
    total:state.get('product').get('total'),
    pageSize:state.get('product').get('pageSize'), 
    isFetching:state.get('product').get('isFetching'),  
})
//映射方法到组件
const mapDispatchToProps = (dispatch) =>({
    handlePage:(page)=>{
        dispatch(actionCreator.getPageAction(page))
    },
    handleUpdateName:(id,newName)=>{
        dispatch(actionCreator.getUpdateNameAction(id,newName))
    },
    handleUpdateMobileName:(id,newMobileName)=>{
        dispatch(actionCreator.getUpdateMobileNameAction(id,newMobileName))
    },
    handleUpdateOrder:(id,newOrder)=>{
        dispatch(actionCreator.getUpdateOrderAction(id,newOrder))
    },
    handleUpdateIsShow:(id,newIsShow)=>{
        dispatch(actionCreator.getUpdateUpdateIsShowAction(id,newIsShow))
    },               
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)