import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import agent from 'src/agent';
import Input from 'src/modules/common/ui-kit/Input';
import Button from 'src/modules/common/ui-kit/Button';
import { useNotification } from 'src/modules/common/ui-kit/Notification';
import FormLayout from '../FormLayout';

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

  const { addNotification } = useNotification();

  const password = useRef('');
  password.current = watch('password', '');

  const onSubmit = (data: IFormFields): void => {
    console.log(data);
    agent.POST('/sign-up', data)
      .then((res) => {
        console.log('result:', res);
      })
      .catch((err) => {
        addNotification({
          title: 'Ошибка',
          description: 'Упс, что-то пошло не так. Пожалуйста, повторите попытку :('
        }, { appearance: 'error' });
        console.error(err);
      });
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Зарегистрируйтесь для своей учетной записи</h1>
        <Input
          className={styles.input}
          label="Email"
          placeholder="email@mail.ru"
          errorText={errors.email?.message}
          {...register('email', {
            required: 'Введите email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный email',
            },
          })}
        />
        <Input
          className={styles.input}
          label="Логин"
          placeholder="login"
          errorText={errors.login?.message}
          {...register('login', {
            required: 'Введите логин',
            minLength: {
              value: 3,
              message: 'Слишком маленький',
            },
            maxLength: {
              value: 48,
              message: 'Слишком большой',
            },
          })}
        />
        <Input
          className={styles.input}
          type="password"
          label="Пароль"
          errorText={errors.password?.message}
          {...register('password', {
            required: 'Введите пароль',
            minLength: {
              value: 8,
              message: 'Слишком маленький',
            },
            maxLength: {
              value: 200,
              message: 'Слишком большой',
            },
          })}
        />
        <Input
          className={styles.input}
          type="password"
          label="Подтверждение пароля"
          errorText={errors.confirmPassword?.message}
          {...register('confirmPassword', {
            required: 'Подтвердите пароль',
            validate: (value) => value === password.current || 'Пароли не совпадают',
          })}
        />
        <Button className={styles.button} type="submit" text="Продолжить" theme="primary" />
      </form>
    </FormLayout>
  );
};

export default SignUpForm;
