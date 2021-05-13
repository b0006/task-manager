import React from 'react';
import { createPortal } from 'react-dom';

import NotificationItem from '../NotificationItem';
import { useNotificationContext, NotificationProvider, ACTIONS } from './NotificationContext';

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
    <NotificationProvider>
      {children}
      {portalTarget ? (
        createPortal(
          <div>
            <div>notification wrapper</div>
            {state.list.map((item, index) => (
              <NotificationItem key={index} title="title" />
            ))}
          </div>,
          portalTarget
        )
      ) : (
        <div>
          <div>notification wrapper</div>
        </div>
      )}
    </NotificationProvider>
  );
};

export const useNotification = () => {
  const [state, dispatch] = useNotificationContext();

  return {
    addNotification: () => {
      dispatch({ type: ACTIONS.add });
      console.log('ADD');
    },
  };
};

export default Provider;
