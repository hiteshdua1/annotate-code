import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownRenderer from './MarkdownRenderer';

it('renders without crashing markdown component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkdownRenderer />, div);
});
