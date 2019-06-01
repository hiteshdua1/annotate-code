import React, { Component } from 'react';
import marked from 'marked';
import * as hljs from 'highlightjs';
import 'highlightjs/styles/tomorrow-night-eighties.css'
const markdownFilePath = require('../markdown-files/hello-world.md');
import { appConfig } from '../config/app.config';

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
    
    var rawMarkup = marked(markdownData, {
      renderer: new marked.Renderer(),
      highlight: (code, language) => {
        return hljs.highlightAuto(code).value;
        // return language
        // ? hljs.highlight(language, code).value
        // : hljs.highlightAuto(code).value
      },
      ...appConfig.marked
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