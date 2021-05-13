import React from 'react';

export interface IProps {
  title: string;
}

const NotificationItem: React.FC<IProps> = ({ title }) => {
  return (
    <div>
      <span>NotificationItem</span>
      <span>{title}</span>
    </div>
  );
};

export default NotificationItem;
