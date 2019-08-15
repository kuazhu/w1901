/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-15 10:05:35
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import "./index.css"
import { actionCreator } from './store'

class NormalLoginForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="Login">
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
        </Form>
        </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

//映射属性到组件
const mapStateToProps = (state) => ({
    task: state.get('login').get('task'),
    list: state.get('login').get('list')
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
    handleChange: (ev) => {
        const task = ev.target.value
        dispatch(actionCreator.getChangeItemAction(task))
    },
    handleAdd: () => {
        dispatch(actionCreator.getAddItemAction())
    },
    handleDel: (index) => {
        dispatch(actionCreator.getDelItemAction(index))
    },
    handleInit: () => {
        dispatch(actionCreator.getRequestInitDataAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)