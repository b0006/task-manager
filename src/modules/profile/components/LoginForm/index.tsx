import React from 'react';
import { useForm } from 'react-hook-form';

import agent from 'src/agent';
import Input from 'src/modules/common/ui-kit/Input';
import Button from 'src/modules/common/ui-kit/Button';
import { useNotification } from 'src/modules/common/ui-kit/Notification';
import FormLayout from '../FormLayout';

import styles from './LoginForm.module.scss';

interface IFormFields {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { addNotification } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();

  const onSubmit = (data: IFormFields): void => {
    console.log(data);
    agent.POST('/sign-in', data)
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
        <h1 className={styles.title}>Войдите в свою учетную запись</h1>
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
        <Button className={styles.button} type="submit" text="Войти" theme="primary" />
      </form>
    </FormLayout>
  );
};

export default LoginForm;
