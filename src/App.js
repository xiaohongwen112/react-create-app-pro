// import logo from './logo.svg';
import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import './App.css';
// import { Radio } from 'antd';
import 'antd/dist/antd.css';
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import Edit from './pages/edit/edit'
import {createBrowserHistory} from 'history';

class App extends Component {
  state = {
    size: 'large',
    history: createBrowserHistory()
  };
  // const { size } = this.state;
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    return (
      <div className="App">
        {/* <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group> */}
        {/* <BrowserRouter> */}
        <Router history={this.state.history}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/edit" component={Edit}></Route>
            <Route path="/" component={Admin}></Route>
          </Switch>
          </Router>
        {/* </BrowserRouter> */}

      </div>
    );
  }
}

export default App;
