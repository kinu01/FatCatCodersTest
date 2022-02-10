import { AxiosRequestConfig } from 'axios';
import api from './config';

async function makeAPIRequest(
  method: 'get' | 'put' | 'post',
  endPoint: string,
  config?: AxiosRequestConfig,
) {
  const response = await api[method](endPoint, config);

  return { ...response, success: true };
}

export const fetchRockets = (params?: object) => {
  const endPoint = '/rockets';

  return makeAPIRequest('get', endPoint, {
    params,
  });
};

export const fetchcrew = (params?: object) => {
  const endPoint = '/crew';

  return makeAPIRequest('get', endPoint, {
    params,
  });
};
