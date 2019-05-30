import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import MarkdownRenderer from '../components/MarkdownRenderer'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('MarkdownRenderer', module)
  .add('Rendered Text', () => <MarkdownRenderer/>);