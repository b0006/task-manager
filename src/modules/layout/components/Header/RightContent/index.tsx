import React from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../../../../common/ui-kit/Button';
import profileStore from '../../../../profile/store';

import styles from './RightContent.module.scss';

const RightContent: React.FC = observer(() => {
  const { profile, actionLogout, actionSetUserData } = profileStore;

  return (
    <div className={styles.wrapper}>
      {profile.isAuth && (
        <Button text="Выйти" theme="primary" onClick={actionLogout} />
      )}
      {!profile.isAuth && (
        <React.Fragment>
          <Button href="/sign-in" className={styles['login-button']} text="Войти" theme="flat" />
          <Button href="/sign-up" text="Регистрация" theme="primary" />
          <Button text="dd" onClick={() => actionSetUserData({ email: 'test@mail.ru' })} />
        </React.Fragment>
      )}
    </div>
  );
});

export default RightContent;
