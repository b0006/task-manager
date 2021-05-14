import React from 'react';
import cn from 'classnames';

import styles from './NotificationItem.module.scss';

export interface IProps {
  title: string;
  description?: string;
}

const NotificationItem: React.FC<IProps> = ({ title }) => {
  return (
    <div className={cn(styles.notification)}>
      <span>NotificationItem</span>
      <span>{title}</span>
    </div>
  );
};

export default NotificationItem;
