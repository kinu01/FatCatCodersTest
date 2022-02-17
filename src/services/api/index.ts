import { AxiosRequestConfig } from 'axios';
import api from './config';

export type EndPoint = '/rockets' | '/crew';

async function makeAPIRequest(
  method: 'get' | 'put' | 'post',
  endPoint: string,
  config?: AxiosRequestConfig,
) {
  const response = await api[method](endPoint, config);

  return response;
}

export const fetchRequest = (endPoint: EndPoint, params?: object) => {
  return makeAPIRequest('get', endPoint, {
    params,
  });
};
