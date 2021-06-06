import React from 'react';

import Button from '../../../../common/ui-kit/Button';

import styles from './RightContent.module.scss';

const RightContent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button href="/sign-in" className={styles['login-button']} text="Войти" theme="flat" />
      <Button href="/sign-up" text="Регистрация" theme="primary" />
    </div>
  );
};

export default RightContent;
