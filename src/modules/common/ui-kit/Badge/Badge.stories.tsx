import React from 'react';
import { Story, Meta } from '@storybook/react';

import Badge, { IProps } from './index';

export default {
  title: 'Elements/Badge',
  component: Badge,
} as Meta;

const Template: Story<IProps> = (args) => <Badge {...args} />;

export const White = Template.bind({});
White.args = {
  theme: 'white',
  text: 'Your text',
};

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  text: 'Your text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  text: 'Your text',
};
