import React from 'react';
import cn from 'classnames';

import Icon from '../SvgIcon';

import styles from './Tag.module.scss';

export interface IProps {
  className?: string;
  text: string;
  onRemove?: () => void;
  theme?: 'white' | 'primary';
}

const Tag: React.FC<IProps> = ({ className, text, theme = 'primary', onRemove }) => {
  const onClickCross = (): void => {
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className={cn(styles.tag, className, styles[`tag_${theme}`])}>
      <span className={styles.title}>{text}</span>
      <button className={styles.button} type="button" onClick={onClickCross}>
        <Icon className={styles.icon} kind="cross" />
      </button>
    </div>
  );
};

export default Tag;
