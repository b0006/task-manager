import React from 'react';

import ClientOnlyPortal from './ClientOnlyPortal';

import styles from './Modal.module.scss';

export interface IProps {
  title: string;
  isShowed: boolean;
}

const Modal: React.FC<IProps> = ({ title, isShowed = false }) => {
  if (!isShowed) {
    return null;
  }

  return (
    <ClientOnlyPortal selector="#modal">
      <div className={styles.overlay}>
        <div>
          <div>{title}</div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
