import React from 'react';

import Button from 'src/modules/common/ui-kit/Button';

import styles from './RightContent.module.scss';

const RightContent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button className={styles['login-button']} text="Log in" theme="flat" />
      <Button text="Sign up" theme="primary" />
    </div>
  );
};

export default RightContent;
