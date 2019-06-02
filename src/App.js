import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownRenderer from './components/MarkdownRenderer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Optimizing life towards O(1)</h2>
        </div>
        <MarkdownRenderer/>
      </div>
    );
  }
}

export default App;
