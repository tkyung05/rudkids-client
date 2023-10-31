import { OAUTH_TYPE } from '@/constants';

import { DefaultApiResponseType } from './api';

export type OAuthType = typeof OAUTH_TYPE.GOOGLE | typeof OAUTH_TYPE.KAKAO;

export interface LoginResponseType {
  accessToken: string;
  refreshToken: string;
  hasPhoneNumber: boolean;
}

export interface LoginApiResponseType extends DefaultApiResponseType {
  data: LoginResponseType;
}

export interface RefreshAuthResponseType extends DefaultApiResponseType {
  data: {
    accessToken: string;
  };
}
