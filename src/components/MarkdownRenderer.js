import React, { Component } from 'react';
import marked from 'marked';
import * as hljs from 'highlightjs';
import 'highlightjs/styles/tomorrow-night-eighties.css'


class MarkdownRenderer extends Component {
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


export default MarkdownRenderer;
