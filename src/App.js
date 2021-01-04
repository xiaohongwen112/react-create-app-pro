// import logo from './logo.svg';
import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

class App extends Component {
  state = {
    size: 'large',
  };
  // const { size } = this.state;
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Admin}></Route>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
