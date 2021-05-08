import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { IProps } from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  text: 'Кнопка',
};
