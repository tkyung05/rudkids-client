import { LoginApiResponseType, OAuthType, RefreshAuthResponseType } from '@/@types/auth';

import { PATH } from '@/constants';

import rudkidsApi from '.';

const loginApi = {
  endPoint: {
    authEntry: (oAuthType: OAuthType) => `/auth/${oAuthType}/oauth-uri`,
    authToken: (oAuthType: OAuthType | null) => `/auth/${oAuthType}/token`,
    relogin: '/auth/renewal/access',
    validate: '/auth/validate/token',
  },

  getUrl: async (oAuthType: OAuthType) => {
    const { data } = await rudkidsApi.get(loginApi.endPoint.authEntry(oAuthType), {
      params: { redirectUri: PATH.OAUTH_REDIRECT_URL },
    });

    return data.oAuthUri;
  },

  login: async (code: string, oAuthType: OAuthType | null) => {
    const { data } = (await rudkidsApi.post(loginApi.endPoint.authToken(oAuthType), {
      authorizationCode: code,
      redirectUri: PATH.OAUTH_REDIRECT_URL,
    })) as LoginApiResponseType;

    return data;
  },

  relogin: async (refreshToken: string | null) => {
    const { data } = (await rudkidsApi.post(loginApi.endPoint.relogin, {
      refreshToken,
    })) as RefreshAuthResponseType;

    return data.accessToken;
  },
};

export default loginApi;
