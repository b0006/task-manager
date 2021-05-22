import React from 'react';
import cn from 'classnames';

import styles from './Radio.module.scss';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  disabled?: boolean;
  wrapperStyle?: React.CSSProperties;
}

const Radio = React.forwardRef((props: IProps, ref?: React.LegacyRef<HTMLInputElement>) => {
  const { label, className, disabled, wrapperStyle, ...rest } = props;

  return (
    <label
      style={wrapperStyle}
      className={cn(styles.wrapper, className, {
        [styles.wrapper_disabled]: disabled,
      })}
    >
      <input disabled={disabled} ref={ref} type="radio" className={styles.input} {...rest} />
      <span
        className={cn(styles.label, {
          [styles['label_no-text']]: !label,
        })}
      >
        {label}
      </span>
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
