import React, { Component } from 'react';
import marked from 'marked';
import * as hljs from 'highlightjs';
import 'highlightjs/styles/tomorrow-night-eighties.css'
const markdownFilePath = require('../markdown-files/hello-world.md');

class MarkdownRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownText: null,
    };
  }

  async componentDidMount() {
    const response = await fetch(markdownFilePath);
    const markdownData = await response.text();
    debugger;

    var rawMarkup = marked(markdownData, {
      renderer: new marked.Renderer(),
      highlight: (code, language) => {
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

  render() {
    const { markdownText } = this.state;
    return <div dangerouslySetInnerHTML={{__html: markdownText}} />
  }
}

export default MarkdownRenderer;
