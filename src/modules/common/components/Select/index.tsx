import React, { useState } from 'react';
import cn from 'classnames';

import SlideDownUp from '../SlideDownUp';
import SvgIcon from '../SvgIcon';

import styles from './Select.module.scss';

export interface IProps {
  className?: string;
  label?: string;
  options: Array<{
    label: string;
    value: string | number;
  }>;
  wrapperStyle?: React.CSSProperties;
}

const Select: React.FC<IProps> = ({ label, wrapperStyle, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  const onAnimationOpenEnd = (): void => {
    setIsOverflow(true);
  };

  const onToggleList = (): void => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsOverflow(false);
    }
  };

  return (
    <div style={wrapperStyle} className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <button className={styles.preview} onClick={onToggleList}>
        <span>current option</span>
        <SvgIcon
          kind="chevronDown"
          className={cn(styles.arrow, {
            [styles.arrow_up]: isOpen,
          })}
        />
      </button>
      <SlideDownUp
        onAnimationOpenEnd={onAnimationOpenEnd}
        className={cn(styles['list-wrapper'], {
          [styles['list-wrapper_overflow']]: isOverflow,
        })}
        isOpen={isOpen}
      >
        <ul>
          {options.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </SlideDownUp>
    </div>
  );
};

export default Select;
