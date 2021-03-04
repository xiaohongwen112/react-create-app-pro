import React, { Component } from 'react';
import './edit.less';
import AddHooks from '../../component/AddHooks/AddHooks';
export default class Admin extends Component{
  render() {
    return (
      <div className="login">
        <header className="login-header">
          登录界面
          <AddHooks/>
        </header>
        <div className="login-main">
        </div>
      </div>
    )
  }
}