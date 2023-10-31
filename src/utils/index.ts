import { OAuthType } from '@/@types/auth';

import { STORAGE_KEY } from '@/constants';

const getSearchParam = (key: string) =>
  typeof window !== 'undefined' ? new URLSearchParams(location.search).get(key) : null;

const getAccessToken = () => localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);

const setAccessToken = (token: string) => {
  localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, token);
};

const removeAccessToken = () => {
  localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
};

const getRefreshToken = () => localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN);

const setRefreshToken = (token: string) => {
  localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, token);
};

const removeRefreshToken = () => {
  localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
};

const setOAuthType = (oAuthType: OAuthType) => {
  localStorage.setItem(STORAGE_KEY.OAUTH_TYPE, oAuthType);
};

const getOAuthType = () => localStorage.getItem(STORAGE_KEY.OAUTH_TYPE);

const removeOAuthType = () => localStorage.removeItem(STORAGE_KEY.OAUTH_TYPE);

export {
  getSearchParam,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setOAuthType,
  getOAuthType,
  removeOAuthType,
};
