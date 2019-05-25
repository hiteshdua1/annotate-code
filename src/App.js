import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import * as hljs from 'highlightjs';
import 'highlightjs/styles/tomorrow-night-eighties.css'


class MarkdownExample extends Component {
  getMarkdownText() {
    const markdownData = " "+
      "> hello world \n" +
      "```javascript \n" +
      "  let name = 'Hitesh Dua' \n" +
      "  const age = 25; \n" +
      "  function Job() { \n" +
      "    return 'Senior Software Engineer`; \n" +
      "  } \n" +
      "``` \n" +
      "- Todo a lot of work \n" +
      "- [ ] Not done this work \n" +
      "- [x] This work is done";
    var rawMarkup = marked(markdownData, {
      renderer: new marked.Renderer(),
      highlight: (code, language) => {
        debugger
        return hljs.highlightAuto(code).value;
        // return language
        // ? hljs.highlight(language, code).value
        // : hljs.highlightAuto(code).value
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    return { __html: rawMarkup };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MarkdownExample/>
      </div>
    );
  }
}

export default App;
