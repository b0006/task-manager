import React from 'react';
import { Story, Meta } from '@storybook/react';

import StoryPage, { IProps } from './StoryPage';

export default {
  title: 'Elements/Popup',
} as Meta;

const Template: Story<IProps> = (args) => <StoryPage {...args} />;

export const Success = Template.bind({});
Success.args = {
  overlayClickClose: false,
  showCloseButton: true,
  appearance: 'success',
  title: 'File deleted',
  description: 'That’s all :)',
  confirm: {
    label: 'Ok',
    handler: () => console.log('Ok'),
  },
};

export const Info = Template.bind({});
Info.args = {
  overlayClickClose: false,
  showCloseButton: true,
  appearance: 'info',
  title: 'Can you help me?',
  confirm: {
    label: 'Confirm',
    handler: () => console.log('Confirm'),
  },
  cancel: {
    label: 'No',
    handler: () => console.log('Cancel'),
  },
};

export const Warning = Template.bind({});
Warning.args = {
  overlayClickClose: false,
  showCloseButton: false,
  appearance: 'warning',
  title: 'Do you want delete?',
  description: 'You can’t restore this file',
  confirm: {
    label: 'Delete',
    handler: () => console.log('Delete'),
  },
  cancel: {
    label: 'Cancel',
    handler: () => console.log('Cancel'),
  },
};

export const Error = Template.bind({});
Error.args = {
  overlayClickClose: false,
  showCloseButton: true,
  appearance: 'error',
  title: 'Error',
  description: 'Oops! Something wrong :(',
};
