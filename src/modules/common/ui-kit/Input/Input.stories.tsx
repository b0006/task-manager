import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input, { IProps } from './index';

export default {
  title: 'Elements/Input',
  component: Input,
} as Meta;

const Template: Story<IProps> = (args) => <Input {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Your label',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Your label',
  placeholder: 'Your placeholder',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: 'Your label',
  description: 'Your description',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Your label',
  isSuccess: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Your label',
  errorText: 'Text error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Your label',
  disabled: true,
  value: '',
};
