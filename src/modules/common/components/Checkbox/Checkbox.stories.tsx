import React from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox, { IProps } from './index';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<IProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  isError: true,
};
