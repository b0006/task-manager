import React from 'react';
import cn from 'classnames';

import styles from './Badge.module.scss';

export interface IProps {
  /** Тема контента */
  theme?: 'white' | 'primary' | 'secondary';
  /** Текст */
  text: string;
  /** Дополнительный класс */
  className?: string;
}

const Badge: React.FC<IProps> = ({ text, theme = 'white', className }) => {
  return <span className={cn(styles.badge, className, styles[`badge_${theme}`])}>{text}</span>;
};

export default Badge;
