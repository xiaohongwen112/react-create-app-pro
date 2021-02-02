import React, { Component } from 'react';
import './login.less'
export default class Admin extends Component{
  state = {
    allData: [
      {name: '机房1', detail:'成都机房', key: 1},
      {name: '机房2', detail:'成都机房', key: 2},
      {name: '机房3', detail:'成都机房', key: 3},
      {name: '机房4', detail:'成都机房', key: 4},
      {name: '机房5', detail:'成都机房', key: 5},
      {name: '机房6', detail:'成都机房', key: 6},
      {name: '机房7', detail:'成都机房', key: 7},
      {name: '机房8', detail:'成都机房', key: 8},
    ],
    showData: []
  }
  componentDidMount( ) {
    setInterval( () => {
      const { showData } = this.state;
      const dataLen = showData.length + 1;
      const news = {}
      news.name = '机房展示' + dataLen;
      news.detail = '成都机房';
      news.key = dataLen;
      this.setState({
        showData: [news, ...showData]
      })
    },1000)
  }
  render() {
    const { showData: list } = this.state
    return (
      <div className="login">
        <header className="login-header">
          登录界面
        </header>
        <div className="login-main">
          <div className="list">
            {list.map(item => {
              return <div className="pre-list" key={item.key}>
                名称：{item.name}； 地点：{item.detail}
              </div> 
            })}
          </div>
        </div>
      </div>
    )
  }
  // 更新声明周期

}