import { useEffect } from 'react';

import { useNotification } from 'src/modules/common/ui-kit/Notification';
import { useFetch } from 'src/modules/common/hooks';

import { useProfileContext, ACTIONS } from './index';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
}

const useLogin = () => {
  const { addNotification } = useNotification();

  const [, dispatch] = useProfileContext();
  const [{ data, error, isLoading }, requestLogin] = useFetch<ILoginRequest, ILoginResponse>('/auth/login', 'POST');
  
  const actionLogin = (email: string, password: string) => {
    requestLogin({ email, password });
  }

  useEffect(() => {
    if (error) {
      addNotification({ title: 'Ошибка', description: error.message?.toString() || 'Ошибка аутентификации' }, { appearance: 'error' });
    }
  }, [error]);

  useEffect(() => {
    if (data && !isLoading) {
      dispatch({ type: ACTIONS.login });
    }
  }, [data, isLoading]);

  return { actionLogin };
}

export default useLogin;
