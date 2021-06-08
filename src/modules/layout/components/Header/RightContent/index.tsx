import React from 'react';
import { observer } from 'mobx-react-lite';

import Button from '../../../../common/ui-kit/Button';
import profileStore from '../../../../profile/store';

import styles from './RightContent.module.scss';

const RightContent: React.FC = observer(() => {
  const { profile, profileData, actionLogout } = profileStore;

  return (
    <div className={styles.wrapper}>
      {profile.isAuth && (
        <React.Fragment>
          <Button href={`/${profileData?.username}`} text="Профиль" icon="user" iconSide="right" theme="secondary" />
          <Button className={styles['logout-button']} text="Выйти" icon="logout" iconSide="right" theme="primary" onClick={actionLogout} />
        </React.Fragment>
      )}
      {!profile.isAuth && (
        <React.Fragment>
          <Button href="/sign-in" className={styles['login-button']} text="Войти" theme="flat" />
          <Button href="/sign-up" text="Регистрация" theme="primary" />
        </React.Fragment>
      )}
    </div>
  );
});

export default RightContent;
