import React from 'react';
import cn from 'classnames';

import Icon, { ICON_LIST } from '../SvgIcon';

import styles from './Button.module.scss';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст кнопки */
  text?: string;
  /** Состояние загрузки */
  isLoading?: boolean;
  /** Иконка */
  icon?: keyof typeof ICON_LIST;
  /** Положение иконки относительно текста */
  iconSide?: 'left' | 'right';
  /** Кнопка в виде круга (только с иконкой) */
  isCircle?: boolean;
  /** Стиль кнопки */
  theme?: 'primary' | 'primary-white' | 'secondary' | 'secondary-white' | 'flat' | 'flat-white';
}

const Button: React.FC<IProps> = ({
  text,
  className,
  disabled,
  isLoading,
  isCircle,
  icon,
  iconSide = 'left',
  theme = 'primary',
  type = 'button',
  ...rest
}) => {
  if (typeof icon === 'undefined' && typeof text === 'undefined') {
    return null;
  }

  const classesSide = {
    [styles.icon_left]: iconSide === 'left' && text,
    [styles.icon_right]: iconSide === 'right' && text,
  };

  const svgIcon = icon && <Icon kind={icon} className={cn(styles.icon, classesSide)} />;

  const svgLoaderIcon = isLoading && (
    <Icon className={cn(styles.icon, styles.icon_loading, classesSide)} kind="loader" />
  );

  return (
    <button
      className={cn(styles.button, className, styles[`button_${theme}`], {
        [styles.button_disabled]: disabled || isLoading,
        [styles.button_circle]: isCircle,
      })}
      type={type}
      disabled={isLoading || disabled}
      {...rest}
    >
      {iconSide === 'left' && svgLoaderIcon}
      {iconSide === 'left' && !isLoading && svgIcon}
      {text && <span>{text}</span>}
      {iconSide === 'right' && !isLoading && svgIcon}
      {iconSide === 'right' && svgLoaderIcon}
    </button>
  );
};

export default Button;
