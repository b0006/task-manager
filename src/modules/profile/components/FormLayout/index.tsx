import React from 'react';

import Button from 'src/modules/common/ui-kit/Button';

import styles from './FormLayout.module.scss';

const FormLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>{children}</div>
      <div className={styles.or}>или</div>
      <Button className={styles.button} theme="secondary" text="Продолжить через Google" icon="google" />
      <Button className={styles.button} theme="secondary" text="Продолжить через VK" icon="vk" />
    </div>
  );
};

export default FormLayout;
