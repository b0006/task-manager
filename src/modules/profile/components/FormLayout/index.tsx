import React from 'react';

import styles from './FormLayout.module.scss';

const FormLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>{children}</div>
      <div>or</div>
      <div>google facebook ...</div>
    </div>
  );
};

export default FormLayout;
