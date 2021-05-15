import React from 'react';
import cn from 'classnames';

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
          <div className={styles.title}>{title}</div>
          {description && <div className={styles.description}>{description}</div>}
          {showCloseButton && (
            <div>
              <button type="button" onClick={onClose}>
                Close
              </button>
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
