import React from 'react';
import cn from 'classnames';

import styles from './BoardCard.module.scss';

interface IProps {
  title: string;
  className?: string; 
}

const BoardCard: React.FC<IProps> = ({ title, className }) => {
  return (
    <div className={cn(styles['board-card'], className)}>
      {title}
    </div>
  );
};

export default BoardCard;
