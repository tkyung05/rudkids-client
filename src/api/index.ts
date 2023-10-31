import axios, { AxiosInstance } from 'axios';

import { PATH } from '@/constants';
import { API } from '@/constants/api';

import { requestInterceptors, responseErrorInterceptors, responseInterceptors } from '@/utils/api';

const rudkidsApi: AxiosInstance = axios.create({
  baseURL: PATH.SERVER_URL,
  headers: {
    [API.CONTENT_TYPE.KEY]: [API.CONTENT_TYPE.DEFUALT],
  },
});

rudkidsApi.interceptors.request.use(requestInterceptors as any);

rudkidsApi.interceptors.response.use(responseInterceptors, responseErrorInterceptors);

export default rudkidsApi;
