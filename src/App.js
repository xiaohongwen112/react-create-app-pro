import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import { Radio } from 'antd';
import 'antd/dist/antd.css';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
