import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Provider } from './index';

import StoryPage from './StoryPage';

export default {
  title: 'Elements/Notification',
} as Meta;

const Template: Story = (args) => (
  <Provider>
    <StoryPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
