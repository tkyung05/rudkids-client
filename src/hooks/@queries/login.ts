import { useMutation } from '@tanstack/react-query';

import { LoginResponseType, OAuthType } from '@/@types/auth';

import { PATH } from '@/constants';

import {
  getOAuthType,
  removeOAuthType,
  setAccessToken,
  setOAuthType,
  setRefreshToken,
} from '@/utils';

import loginApi from '@/api/login';

function useAuth(props: { onSuccessAuth: () => void }) {
  const { mutate: login } = useMutation({
    retry: 0,
    mutationFn: (code: string) => loginApi.login(code, getOAuthType()),
    onSuccess: (response: LoginResponseType) => onSuccess(response),
  });

  const onSuccess = (response: LoginResponseType) => {
    if (response.hasPhoneNumber) {
      location.replace(PATH.MAIN);
    } else {
      props.onSuccessAuth();
    }

    setAccessToken(response.accessToken);
    setRefreshToken(response.refreshToken);
    removeOAuthType();
  };

  return { login };
}

function useGetLoginUrl() {
  const { mutate: getOAuthUrl } = useMutation({
    retry: 0,
    mutationFn: (oAuthType: OAuthType) => loginApi.getUrl(oAuthType),
    onSuccess: (loginUrl, oAuthType) => loginUrl && onSuccess(loginUrl, oAuthType),
    onError: () => onError(),
  });

  const onSuccess = (loginUrl: string, oAuthType: OAuthType) => {
    setOAuthType(oAuthType);
    location.href = loginUrl;
  };

  const onError = () => {
    location.reload();
  };

  return { getOAuthUrl };
}

export { useAuth, useGetLoginUrl };
