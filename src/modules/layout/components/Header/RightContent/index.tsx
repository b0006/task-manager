import React from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../../../../common/ui-kit/Button';
import userStore from '../../../../profile/store';

import styles from './RightContent.module.scss';

const RightContent: React.FC = observer(() => {
  const { user } = userStore;

  return (
    <div className={styles.wrapper}>
      {user.isAuth && (
        <Button text="Выйти" theme="primary" />
      )}
      {!user.isAuth && (
        <React.Fragment>
          <Button href="/sign-in" className={styles['login-button']} text="Войти" theme="flat" />
          <Button href="/sign-up" text="Регистрация" theme="primary" />
        </React.Fragment>
      )}
    </div>
  );
});

export default RightContent;
