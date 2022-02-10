import { AxiosRequestConfig } from 'axios';
import api from './config';

async function makeAPIRequest(
  method: 'get' | 'put' | 'post',
  endPoint: string,
  body?: AxiosRequestConfig,
) {
  try {
    const response = await api[method](endPoint, body);

    return { ...response, success: true };
  } catch (error) {
    console.warn(error);
    return { error, success: false };
  }
}

export const fetchRockets = () => {
  const endPoint = '/rockets';

  return makeAPIRequest('get', endPoint);
};

export const fetchcrew = () => {
  const endPoint = '/crew';

  return makeAPIRequest('get', endPoint);
};
