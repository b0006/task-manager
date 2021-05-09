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

  const iconLeftSide = iconSide === 'left';
  const iconRightSide = iconSide === 'right';

  const classesIcon = cn(styles.icon, {
    [styles.icon_left]: iconLeftSide && text,
    [styles.icon_right]: iconRightSide && text,
    [styles.icon_only]: isCircle,
    [styles.icon_loading]: isLoading,
  });

  const svgIconLoader = <Icon className={classesIcon} kind="loader" />;
  const svgIcon = icon && <Icon kind={icon} className={classesIcon} />;

  const currentIcon = isLoading ? svgIconLoader : svgIcon;

  return (
    <button
      className={cn(styles.button, className, styles[`button_${theme}`], {
        [styles.button_circle]: isCircle,
      })}
      type={type}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isCircle ? (
        svgIcon
      ) : (
        <React.Fragment>
          {iconLeftSide && currentIcon}
          {text && <span>{text}</span>}
          {iconRightSide && currentIcon}
        </React.Fragment>
      )}
    </button>
  );
};

export default Button;
