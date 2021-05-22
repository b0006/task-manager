import React from 'react';
import { Story, Meta } from '@storybook/react';

import Radio, { IProps } from './index';

export default {
  title: 'Elements/Radio',
  component: Radio,
} as Meta;

const Template: Story<IProps> = (args) => (
  <div>
    <Radio {...args} name="test" wrapperStyle={{ marginRight: '12px' }} />
    <Radio {...args} name="test" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};
