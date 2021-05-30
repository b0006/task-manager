import { useProfileContext, ACTIONS } from './index';

import { useNotification } from 'src/modules/common/ui-kit/Notification';
import { useFetch } from 'src/modules/common/hooks';
import { useEffect } from 'react';

const useProfile = () => {
  const { addNotification } = useNotification();

  const [state, dispatch] = useProfileContext();
  const [{ data, error, isLoading }, requestLogin] = useFetch<{ username: string, password: string }, { access_token: string }>('/auth/login', 'POST');
  
  const actionLogin = async (email: string, password: string) => {
    // TODO: сделать настоящий email
    requestLogin({ username: email, password });
  }

  useEffect(() => {
    if (error) {
      addNotification({ title: 'Ошибка', description: error.message?.toString() || 'Ошибка аутентификации' }, { appearance: 'error' });
    }
  }, [error]);

  useEffect(() => {
    if (data && !isLoading) {
      dispatch({ type: ACTIONS.login, payload: { token: data.access_token } });
    }
  }, [data, isLoading]);

  return {
    ...state,
    actionLogin,
  }
}

export default useProfile;
