import { useProfileContext } from './index';
import useLogin from './useLogin';

const useProfile = () => {
  const [state] = useProfileContext();

  const { actionLogin } = useLogin();
 
  return {
    ...state,
    actionLogin,
  }
}

export default useProfile;
