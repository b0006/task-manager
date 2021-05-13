import {} from 'react';

import usePortalInBody from './usePortalInBody';

const useNotification = () => {
  const Portal = usePortalInBody({ selector: '#notification' });

  return {
    Portal,
  };
};

export default useNotification;
