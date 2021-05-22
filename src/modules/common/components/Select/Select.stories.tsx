import React from 'react';
import { Story, Meta } from '@storybook/react';

import Select, { IProps } from './index';

export default {
  title: 'Elements/Select',
  component: Select,
} as Meta;

const Template: Story<IProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  emptyOptionLabel: '---',
  wrapperStyle: {
    maxWidth: '500px',
  },
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  label: 'Label',
  value: '2',
  onChange: console.log,
  wrapperStyle: {
    maxWidth: '500px',
  },
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
  ],
};
