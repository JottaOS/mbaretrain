import { ApiError, ErrorType } from '@/types/api';
import axios from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_URL;

console.log(baseURL);
export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  // const token = getFromStore('token');
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  console.log('[Request]', {
    method: config.method,
    url: config.url,
    headers: config.headers,
    data: config.data
  });
  return config;
});

api.interceptors.response.use(response => {
  console.log('[Response]', {
    method: response.config.method,
    url: response.config.url,
    status: response.status,
    data: response.data
  });
  return response;
});

export const handleError = (error: any): ApiError => {
  console.error(error);
  if (axios.isAxiosError(error) && error.response) {
    return {
      success: false,
      status: error.response.status,
      data: error.response.data as ErrorType
    };
  } else {
    return {
      success: false,
      status: 500,
      data: { id: '', code: 'internal_unexpected_error', message: 'Ha ocurrido un error inesperado' }
    };
  }
};
