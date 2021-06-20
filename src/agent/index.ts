import { AxiosResponse } from 'axios';

import axios from './axios';

type TObject = Record<string, unknown>;

const timeout = 60000;

const methods = {
  POST<T = TObject, R = TObject>(path: string, data?: T): Promise<AxiosResponse<R>> {
    return axios.post(`${path}/`, data, { timeout });
  },

  GET<T = TObject, R = TObject>(path: string, params?: T): Promise<AxiosResponse<R>> {
    return axios.get(path, {
      params,
      timeout,
    });
  },

  DELETE<T = TObject, R = TObject>(path: string, data?: T): Promise<AxiosResponse<R>> {
    return axios.delete(`${path}/`, { timeout, data });
  },
}

export default methods;
