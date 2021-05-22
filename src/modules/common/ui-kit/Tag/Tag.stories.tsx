import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tag, { IProps } from './index';

export default {
  title: 'Elements/Tag',
  component: Tag,
} as Meta;

const Template: Story<IProps> = (args) => <Tag {...args} />;

export const White = Template.bind({});
White.args = {
  theme: 'white',
  text: 'Tag',
};

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  text: 'Tag',
};
