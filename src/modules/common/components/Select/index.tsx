import React, { useState, useRef } from 'react';
import cn from 'classnames';

import SlideDownUp from '../SlideDownUp';
import SvgIcon from '../SvgIcon';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import styles from './Select.module.scss';

type TOptionValue = string | number;

interface IOption {
  label: string;
  value: TOptionValue;
}
export interface IProps {
  className?: string;
  label?: string;
  options: IOption[];
  wrapperStyle?: React.CSSProperties;
  isOutsideClickClose?: boolean;
}

const Select: React.FC<IProps> = ({ label, wrapperStyle, isOutsideClickClose = true, options = [] }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [activeOption, setActiveOption] = useState<IOption | null>(null);

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

  const onClickOption = (value: TOptionValue) => (): void => {
    const [findOption] = options.filter((option) => option.value === value);
    setActiveOption(findOption);
    onToggleList();
  };

  const onOutSideClick = (): void => {
    if (isOutsideClickClose) {
      setIsOverflow(false);
      setIsOpen(false);
    }
  };

  useOnClickOutside(contentRef, onOutSideClick);

  return (
    <div
      style={wrapperStyle}
      className={cn(styles.wrapper, {
        [styles.wrapper_open]: isOpen,
      })}
      ref={contentRef}
    >
      <span className={styles.label}>{label}</span>
      <button className={styles.preview} onClick={onToggleList}>
        <span className={styles['active-option']}>{activeOption && activeOption.label}</span>
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
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              key={option.value}
              className={cn(styles['list-item'], {
                [styles['list-item_active']]: option.value === activeOption?.value,
              })}
            >
              <button
                tabIndex={isOpen ? 0 : -1}
                type="button"
                onClick={onClickOption(option.value)}
                className={styles['list-item-button']}
              >
                {option.label}
              </button>
              {option.value === activeOption?.value && <SvgIcon kind="checked" className={styles['icon-active']} />}
            </li>
          ))}
        </ul>
      </SlideDownUp>
    </div>
  );
};

export default Select;
