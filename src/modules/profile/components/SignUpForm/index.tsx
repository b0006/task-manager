import React from 'react';

import Input from 'src/modules/common/ui-kit/Input';
import Button from 'src/modules/common/ui-kit/Button';

import styles from './SignUpForm.module.scss';

const SignUpForm: React.FC = () => {
  return (
    <form>
      <h1 className={styles.title}>Sign up for your account</h1>
      <Input className={styles.input} name="email" label="email" placeholder="email@mail.ru" />
      <Button className={styles.button} type="submit" text="Continue" theme="primary" />
    </form>
  );
};

export default SignUpForm;
