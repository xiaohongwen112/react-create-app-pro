import React, { Component } from 'react';
import { Layout, Menu, Input, Button, Modal  } from 'antd';
import {Link} from 'react-router-dom';
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction} from '../../redux/actions'
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
    preData: {},
    visible: false,
    num: 1,
    allNum: 0,
  }

  componentDidMount() {
    //
    store.subscribe(() => {
      console.log('redux修改'+ store.getState())
    })
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
                <Button type="primary" style={{float: 'left', marginLeft:"10px"}} onClick={() => this.addFn() }>+</Button>
                <Button type="primary" style={{float: 'left', marginLeft:"10px"}} onClick={() => this.reduceFn() }>-</Button>
                <span>{this.state.allNum}</span>
                <span>{store.getState()}</span>
                <div style={{margin: '54px 0px 0 30px'}}>
                  {
                    this.state.list.map((element, index) => {
                      return  <MainShow key={index} name={element.name} editChild={(data) => this.editChildFn(data)} area={element.area}></MainShow>
                    })
                  }
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
        <ModelCommon visible={this.state.visible} hasData = {(data) => this.addDataFn(data)} allData = {this.state.preData} onClicked={this.createRoom.bind(this)}/>     
      </div>
    )
  }

  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }
  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps')
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  // }
  // componetWillReceiveProps() {
  //   console.log('componetWillReceiveProps')
  // }


  addFn() {
    store.dispatch(createIncrementAction(this.state.num))
    // store.dispatch({type: 'increment', data: 1})
    const data = this.state.allNum + this.state.num
    this.setState({
      allNum: data
    })
  }

  reduceFn() {
    store.dispatch(createDecrementAction(this.state.num))
    // store.dispatch({type: 'decrement', data: 1})
    const data = this.state.allNum - this.state.num
    this.setState({ // react 的机制 1：通过setState修改数据， 2：触发render
      allNum: data
    })
  }
  editChildFn = (data) => {
    this.setState({
      preData: data
    })
    this.createRoom(true)
  }
  addDataFn = (data)=> {
    const newObj = {...data}
    const {list: olddata} = this.state
    this.setState({
      list: [newObj, ...olddata]
    })
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