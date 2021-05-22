import React from 'react';
import { Story, Meta } from '@storybook/react';

import StoryPage, { IProps } from './StoryPage';

export default {
  title: 'Elements/Modal',
} as Meta;

const Template: Story<IProps> = (args) => <StoryPage {...args} />;

export const Layout = Template.bind({});
Layout.args = {
  overlayClickClose: false,
};
