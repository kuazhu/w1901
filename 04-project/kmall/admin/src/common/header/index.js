/*
* @Author: TomChen
* @Date:   2019-08-15 16:55:33
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-15 16:56:37
*/
/*
 * @Author: TomChen
 * @Date:   2019-08-09 15:14:36
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-15 16:53:41
 */
import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import "./index.css"

class AdminHeader extends Component {
    render() {
        return (
            <div className="AdminHeader">
                <Header className="header">
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
                </Header>
            </div>
        );
    }
}


export default AdminHeader