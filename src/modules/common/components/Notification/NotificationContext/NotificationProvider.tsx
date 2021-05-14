import React from 'react';
import { createPortal } from 'react-dom';

import NotificationLayout from '../NotificationLayout';
import NotificationItem from '../NotificationItem';
import { useNotificationContext, NotificationProvider, ACTIONS } from './NotificationContext';
import { TAppearance, TPlacement } from '../types';
import { generateUUIDv4 } from '../utils';

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

interface IProps {
  portalTargetSelector?: string;
}

const Provider: React.FC<IProps> = ({ portalTargetSelector, children }) => {
  const [state, dispatch] = useNotificationContext();

  const portalTarget = canUseDOM
    ? portalTargetSelector
      ? document.querySelector(portalTargetSelector)
      : document.body
    : null;

  return (
    <div>
      {children}
      {portalTarget ? (
        createPortal(
          <NotificationLayout>
            {state.list.map((item, index) => (
              <NotificationItem key={index} title="title" />
            ))}
          </NotificationLayout>,
          portalTarget
        )
      ) : (
        <NotificationLayout />
      )}
    </div>
  );
};

interface IContent {
  title: string;
  description: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface IOptions {
  id?: string;
  placement?: TPlacement;
  appearance?: TAppearance;
}

export const useNotification = () => {
  const [state, dispatch] = useNotificationContext();

  const hasAlready = (id: string) => {
    if (!state.list.length) {
      return false;
    }

    return !!state.list.filter((n) => n.id === id).length;
  };

  const add = (content: IContent, options: IOptions = {}): string | undefined => {
    const id = options.id ? options.id : generateUUIDv4();

    if (hasAlready(id)) {
      return;
    }

    dispatch({ type: ACTIONS.add, payload: { content, id, ...options } });

    return id;
  };

  const remove = (id: string): void => {
    if (!hasAlready(id)) {
      return;
    }

    dispatch({ type: ACTIONS.remove, payload: { id } });
  };

  const removeAll = (): void => {
    dispatch({ type: ACTIONS.removeAll });
  };

  return {
    addNotification: add,
    removeNotification: remove,
    removeAllNotifications: removeAll,
  };
};

export default Provider;
