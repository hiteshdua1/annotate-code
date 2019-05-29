import React, { Component } from 'react';
import marked from 'marked';
import * as hljs from 'highlightjs';
import 'highlightjs/styles/tomorrow-night-eighties.css'
const markdownFilePath = require('../markdown-files/hello-world.md');

class MarkdownRenderer extends Component {
  async getMarkdownText() {
    // const markdownData = " "+
    //   "> hello world \n" +
    //   "```javascript \n" +
    //   "  let name = 'Hitesh Dua' \n" +
    //   "  const age = 25; \n" +
    //   "  function Job() { \n" +
    //   "    return 'Senior Software Engineer`; \n" +
    //   "  } \n" +
    //   "``` \n" +
    //   "- Todo a lot of work \n" +
    //   "- [ ] Not done this work \n" +
    //   "- [x] This work is done";
    const response = await fetch(markdownFilePath);
    const markdownData = await response.text();
    debugger;

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

    this.setState({
      markdownText: rawMarkup
    })
  }
  getMarkdownText()
  render() {
    const { markdownText } = this.state;
    return <div dangerouslySetInnerHTML={{__html: markdownText}} />
  }
}


export default MarkdownRenderer;
