import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import MarkdownRenderer from './components/MarkdownRenderer';
const markdownFilePath = require('./markdown-files/hello-world.md');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Optimizing life towards O(1)</h2>
        </div>
        <MarkdownRenderer markdownFilePath={markdownFilePath}/>
      </div>
    );
  }
}

export default App;
