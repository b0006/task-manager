import { useState, useCallback } from 'react';

import agent from '../../../agent';

type TMethod = keyof typeof agent;
type TError = IError | null;

interface IFetchReturn<T> {
  response: T | null;
  error: TError;
}

interface IError {
  statusCode: number;
  message: Error | string | null;
}

interface IReturn {
  isLoading: boolean;
}

const useFetch = <T = object, R = object>(url: string, method: TMethod): [(data?: T) => Promise<IFetchReturn<R>>, IReturn] => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (data?: T): Promise<IFetchReturn<R>> => {
    setIsLoading(true);

    try {
      const response = await agent[method]<T, R>(url, data);
      if (response.status < 200 && response.status >= 300) {
        // TODO: обработать корректно неудачные запросы
        throw new Error('Неизвестная ошибка');
      }

      return {
        response: response.data,
        error: null,
      }
    } catch (err) {
      const message = err?.response?.data?.message || err.toString();

      return {
        response: null,
        error: {
          statusCode: err?.response?.status,
          message,
        }
      }
    } finally {
      setIsLoading(false);
    }
  } ,[method, url]);

  return [fetchData, { isLoading }];
};

export default useFetch;
