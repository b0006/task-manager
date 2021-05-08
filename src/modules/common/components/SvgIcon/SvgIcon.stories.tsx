import React from 'react';
import { Story, Meta } from '@storybook/react';

import SvgIcon, { IProps } from './index';
import styles from './SvgIcon.module.scss';

export default {
  title: 'Elements/SvgIcon',
  component: SvgIcon,
} as Meta;

const Template: Story<IProps> = (args) => <SvgIcon {...args} />;

export const Plus = Template.bind({});
Plus.args = {
  kind: 'plus',
  className: styles.icon,
};
