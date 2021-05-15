import React from 'react';
import cn from 'classnames';

import Button from 'src/modules/common/components/Button';
import SvgIcon, { ICON_LIST } from 'src/modules/common/components/SvgIcon';

import { INotificationState } from '../types';
import { useNotificationContext, ACTIONS } from '../NotificationContext/NotificationContext';

import styles from './NotificationItem.module.scss';

const NotificationItem: React.FC<INotificationState> = ({
  title,
  description,
  id,
  appearance = 'success',
  showCloseButton = true,
  needClose,
}) => {
  const [, dispatch] = useNotificationContext();

  const onClose = (): void => {
    dispatch({ type: ACTIONS.close, payload: { id } });
  };

  const getIconKind = (): keyof typeof ICON_LIST => {
    if (appearance === 'error') {
      return 'cross';
    }

    if (appearance === 'info') {
      return 'info';
    }

    return 'checked';
  };

  const onCloseEnd = (): void => {
    if (needClose) {
      dispatch({ type: ACTIONS.remove, payload: { id } });
    }
  };

  return (
    <div
      className={cn(styles.notification, {
        [styles.notification_close]: needClose,
      })}
      onAnimationEnd={onCloseEnd}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          {title && <div className={styles.title}>{title}</div>}
          {description && (
            <div
              className={cn(styles.description, {
                [styles['description_no-title']]: !title,
              })}
            >
              {description}
            </div>
          )}
          {showCloseButton && (
            <div className={styles.buttons}>
              <Button text="Close" theme="secondary" type="button" onClick={onClose} />
            </div>
          )}
        </div>
        <div>
          <div className={cn(styles['icon-wrapper'], styles[`icon-wrapper_${appearance}`])}>
            <SvgIcon kind={getIconKind()} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
