import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { IProps } from './index';
import Page from './Page';

export default {
  title: 'Elements/Modal',
  component: Modal,
} as Meta;

const Template: Story<IProps> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
