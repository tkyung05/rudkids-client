import axios, { AxiosInstance } from 'axios';

import { PATH } from '@/constants';
import { API } from '@/constants/api';

import { getAccessToken } from '@/utils';

const verifyInstance: AxiosInstance = axios.create({
  baseURL: PATH.SERVER_URL,
  headers: {
    [API.CONTENT_TYPE.KEY]: [API.CONTENT_TYPE.DEFUALT],
  },
});

const verifyApi = {
  endPoint: {
    sendNumber: '/verify/send',
    validateCode: '/verify/validate',
    validateToken: '/auth/validate/token',
  },

  sendPhoneNumber: async (phoneNumber: string) => {
    const response = await verifyInstance.post(verifyApi.endPoint.sendNumber, {
      phoneNumber: phoneNumber,
    });

    return response;
  },

  validateCode: async (phoneNumber: string, code: string) => {
    const response = await verifyInstance.post(
      verifyApi.endPoint.validateCode,
      {
        phoneNumber,
        code,
      },
      {
        headers: {
          [API.AUTHORIZATION_KEY]: `${API.BEARER} ${getAccessToken()}`,
        },
      }
    );

    return response;
  },

  validateToken: async (token: string) => {
    const response = await verifyInstance.get(verifyApi.endPoint.validateToken, {
      headers: {
        [API.AUTHORIZATION_KEY]: `${API.BEARER} ${token}`,
      },
    });

    return response;
  },
};

export default verifyApi;
