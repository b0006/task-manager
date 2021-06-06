import React from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';

import Input from '../../../common/ui-kit/Input';
import Button from '../../../common/ui-kit/Button';
import { useNotification } from '../../../common/ui-kit/Notification';
import { useFetch } from '../../../common/hooks';
import profileStore, { IProfileData } from '../../store';

import FormLayout from '../FormLayout';

import styles from './LoginForm.module.scss';

interface IFormFields {
  email: string;
  password: string;
}

const LoginForm: React.FC = observer(() => {
  const { addNotification } = useNotification();
  const { actionSetUserData } = profileStore;

  const [signInRequest] = useFetch<IFormFields, IProfileData>('/auth/sign-in', 'POST');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();

  const onSubmit = async (data: IFormFields): Promise<void> => {
    const { response, error } = await signInRequest(data);

    if (error || !response) {
      addNotification(
        { title: 'Ошибка', description: error?.message?.toString() || 'Неизвестная ошибка' },
        { appearance: 'error' }
      );
      return;
    }

    actionSetUserData(response);
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
});

export default LoginForm;
