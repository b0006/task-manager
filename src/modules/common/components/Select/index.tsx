import React, { useState, useRef } from 'react';
import cn from 'classnames';

import SlideDownUp from '../SlideDownUp';
import SvgIcon from '../SvgIcon';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import SelectOption from './SelectOption';
import styles from './Select.module.scss';

export type TOptionValue = string | number | null;

export interface IOption {
  label: string;
  value: TOptionValue;
}
export interface IProps {
  className?: string;
  label?: string;
  options: IOption[];
  wrapperStyle?: React.CSSProperties;
  isOutsideClickClose?: boolean;
  withEmptyOption?: boolean;
  emptyOptionLabel?: string;
  value?: TOptionValue;
  defaultValue?: TOptionValue;
  onChange?: (value: IOption | null) => void;
}

const Select: React.FC<IProps> = ({
  label,
  wrapperStyle,
  isOutsideClickClose = true,
  value,
  onChange,
  withEmptyOption,
  emptyOptionLabel = '',
  options = [],
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [activeOption, setActiveOption] = useState<IOption | null>(
    options.filter((option) => option.value === value)[0]
  );

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

  const onCloseList = (): void => {
    setIsOverflow(false);
    setIsOpen(false);
  };

  const onClickOption = (value: TOptionValue) => (): void => {
    const [findOption = null] = options.filter((option) => option.value === value);
    setActiveOption(findOption);
    onCloseList();
    if (onChange) {
      onChange(findOption);
    }
  };

  const onOutSideClick = (): void => {
    if (isOutsideClickClose) {
      onCloseList();
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
      <div className={styles.preview}>
        <span className={styles['active-option']}>{activeOption && activeOption.label}</span>
        <div className={styles.icons}>
          {activeOption && (
            <button className={cn(styles.button, styles['button-remove'])} onClick={onClickOption(null)} type="button">
              <SvgIcon kind="cross" className={styles.icon} />
            </button>
          )}
          <button className={styles.button} onClick={onToggleList} type="button">
            <SvgIcon
              kind="chevronDown"
              className={cn(styles.icon, styles.arrow, {
                [styles.arrow_up]: isOpen,
              })}
            />
          </button>
        </div>
      </div>
      <SlideDownUp
        onAnimationOpenEnd={onAnimationOpenEnd}
        className={cn(styles['list-wrapper'], {
          [styles['list-wrapper_overflow']]: isOverflow,
        })}
        isOpen={isOpen}
      >
        <ul className={styles.list}>
          {withEmptyOption && (
            <SelectOption
              isOpen={isOpen}
              activeOption={null}
              option={{ label: emptyOptionLabel, value: null }}
              onChange={onClickOption(null)}
            />
          )}
          {options.map((option) => (
            <SelectOption
              key={option.value}
              option={option}
              activeOption={activeOption}
              isOpen={isOpen}
              onChange={onClickOption(option.value)}
            />
          ))}
        </ul>
      </SlideDownUp>
    </div>
  );
};

export default Select;
