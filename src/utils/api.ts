import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { PATH } from '@/constants';
import { API, RESPONSE } from '@/constants/api';

import loginApi from '@/api/login';

import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
} from '.';

const requestInterceptors = (config: AxiosRequestConfig) => {
  if (config.headers && getAccessToken()) {
    config.headers[API.AUTHORIZATION_KEY] = `${API.BEARER} ${getAccessToken()}`;
  }

  console.log(config);

  return config;
};

const responseInterceptors = (response: AxiosResponse) => {
  return response;
};

const responseErrorInterceptors = async (error: any) => {
  const {
    config,
    response: { status },
  } = error;

  const onErrorRelogin = () => {
    removeAccessToken();
    removeRefreshToken();
    location.replace(PATH.AUTH);
  };

  if (status === RESPONSE.STATUS.UNAUTHORIZED) {
    loginApi
      .relogin(getRefreshToken())
      .then((renewalAccessToken) => {
        setAccessToken(renewalAccessToken);
        config.headers[API.AUTHORIZATION_KEY] = `${API.BEARER} ${renewalAccessToken}`;
        return axios.request(config);
      })
      .catch(() => onErrorRelogin());
  }
  if (status === RESPONSE.STATUS.UNVERIFY) {
    return location.replace(PATH.AUTH);
  }

  return Promise.reject(error);
};

export { requestInterceptors, responseInterceptors, responseErrorInterceptors };
