import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import MarkdownRenderer from '../components/MarkdownRenderer'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('MarkdownRenderer', module)
  .add('Rendered Text', () => <MarkdownRenderer/>);