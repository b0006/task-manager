import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Input from 'src/modules/common/ui-kit/Input';
import Button from 'src/modules/common/ui-kit/Button';

import styles from './SignUpForm.module.scss';

interface IFormFields {
  email: string;
  login: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormFields>();

  const password = useRef('');
  password.current = watch('password', '');

  const onSubmit = (data: IFormFields): void => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Sign up for your account</h1>
      <Input
        className={styles.input}
        label="Email"
        placeholder="email@mail.ru"
        errorText={errors.email?.message}
        {...register('email', {
          required: 'Input your email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Incorrect email',
          },
        })}
      />
      <Input
        className={styles.input}
        label="Login"
        placeholder="login"
        errorText={errors.login?.message}
        {...register('login', {
          required: 'Input your login',
          minLength: {
            value: 3,
            message: 'So small',
          },
          maxLength: {
            value: 48,
            message: 'So big',
          },
        })}
      />
      <Input
        className={styles.input}
        type="password"
        label="Password"
        errorText={errors.password?.message}
        {...register('password', {
          required: 'Input your password',
          minLength: {
            value: 8,
            message: 'So small',
          },
          maxLength: {
            value: 200,
            message: 'So big',
          },
        })}
      />
      <Input
        className={styles.input}
        type="password"
        label="Confirm password"
        errorText={errors.confirmPassword?.message}
        {...register('confirmPassword', {
          required: 'Confirm your password',
          validate: (value) => value === password.current || 'The passwords do not match',
        })}
      />
      <Button className={styles.button} type="submit" text="Continue" theme="primary" />
    </form>
  );
};

export default SignUpForm;
