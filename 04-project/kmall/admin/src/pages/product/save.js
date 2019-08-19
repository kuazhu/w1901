/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-19 10:16:46
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'

import { Breadcrumb,Form, Select, Input, Button,InputNumber } from 'antd'
const { Option } = Select

import UploadImage from 'common/upload-image'
import { UPLOAD_PRODUCT_IMAGE } from 'api/config.js'

import Layout from 'common/layout'

import "./index.css"

class CategoryAdd extends Component {

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.getLevelCategories()
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleAdd(values)
            }
        })
    }    
    render() {
        const { getFieldDecorator } = this.props.form
        const {categories} = this.props
        return (
            <Layout>
                 <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>商品管理</Breadcrumb.Item>
                  <Breadcrumb.Item>添加商品</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
                        <Form.Item label="商品分类">
                          {getFieldDecorator('category', {
                            rules: [{ required: true, message: '请选择商品分类' }],
                          })(
                            <Select
                              placeholder="请选择父级分类"
                            >
                              {
                                categories.map((category)=>{
                                    return <Option key={category.get('_id')} value={category.get('_id')}>{category.get('name')}</Option>
                                })
                              }
                            </Select>,
                          )}
                        </Form.Item>                    
                        <Form.Item label="商品名称">
                          {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入商品名称' }],
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="商品描述">
                          {getFieldDecorator('description', {
                            rules: [{ required: true, message: '请输入商品描述' }],
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="商品价格">
                          {getFieldDecorator('price', {
                            rules: [{ required: true, message: '请输入商品价格' }],
                          })(<InputNumber />)}
                        </Form.Item>
                        <Form.Item label="商品库存">
                          {getFieldDecorator('stock', {
                            rules: [{ required: true, message: '请输入商品价格' }],
                          })(<InputNumber />)}
                        </Form.Item>
                        <Form.Item label="封面图片">
                          <UploadImage  
                            max={1}
                            action={UPLOAD_PRODUCT_IMAGE}
                          />
                        </Form.Item>
                        <Form.Item label="商品图片">
                          <UploadImage 
                            max={3}
                            action={UPLOAD_PRODUCT_IMAGE}
                          />
                        </Form.Item>
                        <Form.Item label="商品详情">
                          rich editor
                        </Form.Item>                                                                                                                                                        
                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                          <Button type="primary" onClick={this.handleSubmit}>
                            提交
                          </Button>
                        </Form.Item>
                      </Form>                                  
                </div>                
            </Layout>
        )
    }
}

const WrappedCategoryAdd = Form.create({ name: 'category' })(CategoryAdd)

//映射属性到组件
const mapStateToProps = (state) => ({
    categories:state.get('category').get('categories')
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
    handleAdd:(values)=>{
        dispatch(actionCreator.getAddAction(values))
    },
    getLevelCategories:()=>{
        dispatch(actionCreator.getLevelCategoriesAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedCategoryAdd)