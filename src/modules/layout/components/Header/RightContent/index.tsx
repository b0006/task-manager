import React from 'react';
import Link from 'next/link';

import Button from 'src/modules/common/ui-kit/Button';

import styles from './RightContent.module.scss';

const RightContent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/login">
        <Button href="/login" className={styles['login-button']} text="Войти" theme="flat" />
      </Link>
      <Link href="/sign-up">
        <Button href="/sign-up" text="Регистрация" theme="primary" />
      </Link>
    </div>
  );
};

export default RightContent;
