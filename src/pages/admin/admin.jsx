import React, { Component } from 'react';
import { Layout, Menu, Input, Button, Modal  } from 'antd';
import {Link} from 'react-router-dom';
import {
  SnippetsFilled,
  DiffFilled,
  AudioOutlined,
} from '@ant-design/icons';
import './admin.less'
import MainShow from '../../component/MainShow'
import ModelCommon from '../../component/ModelCommon/ModelCommon'
const { Search } = Input;
const { Sider, Content } = Layout;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = value => console.log(value);
export default class Admin extends Component{
  state = {
    list: [
      {name: '成都', area: "成都"},
      {name: '成都', area: "成都"},
      {name: '成都', area: "成都"},
      {name: '成都', area: "成都"},
      {name: '成都', area: "成都"},
    ],
    visible: false,
  }
  render() {
    return (
      <div className="main">
        <Layout>
          <Sider
            width="240px"
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              background: '#515a6e'
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{background: '#515a6e'}} className="sider-item">
              <Menu.Item key="1" icon={<SnippetsFilled />} className="sider-pre-item">
                机房管理
              </Menu.Item>
              <Menu.Item key="2" className="sider-pre-item" icon={<DiffFilled />}>
                资产管理
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content style={{ margin: '0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <Search 
                  placeholder="输入机房名称关键字" 
                  onSearch={onSearch} 
                  enterButton
                  className="search-input"
                />
                <Button type="primary" style={{float: 'left', marginLeft:"10px"}} onClick={() => this.createRoom(true) }>创建机房</Button>
                <div style={{margin: '54px 0px 0 30px'}}>
                  {
                    this.state.list.map((element, index) => {
                      return  <MainShow key={index} name={element.name} area={element.area}></MainShow>
                    })
                  }
                  <Link to="/login">关于</Link>

                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
        <ModelCommon visible={this.state.visible} onClicked={this.createRoom.bind(this)}/>     
      </div>
    )
  }
  createRoom(data) {
    this.setState({
      visible: data
    })
  }
  onSearch() {
    debugger;
  }
}