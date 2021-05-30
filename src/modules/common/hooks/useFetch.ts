import { useState, useCallback } from 'react';

import agent from 'src/agent';

type Method = keyof typeof agent;

interface IError {
  statusCode: number;
  message: Error | string | null;
}

interface IResponse<R> {
  isLoading: boolean;
  data: R | undefined;
  error: IError | null;
}

const useFetch = <T = object, R = object>(url: string, method: Method): [IResponse<R>, (data?: T) => void] => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<R>();
  const [error, setError] = useState<IError | null>(null);

  const fetchData = useCallback(async (data?: T) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await agent[method]<T, R>(url, data);
      if (response.status < 200 && response.status >= 300) {
        // TODO: обработать корректно неудачные запросы
        throw 'Unknown error';
      }
      setResponseData(response.data);
    } catch (err) {
      const message = err?.response?.data?.message || err.toString();
      setError({
        statusCode: err.response.status,
        message,
      });
    } finally {
      setIsLoading(false);
    }
  } ,[method, url]);

  return [{ isLoading, data: responseData, error }, fetchData];
};

export default useFetch;
