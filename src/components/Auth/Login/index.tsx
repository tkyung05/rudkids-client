import GOOGLE_ICON from '@/assets/png/google_logo.png';
import KAKAO_ICON from '@/assets/png/kakao_logo.png';

import { useGetLoginUrl } from '@/hooks/@queries/login';

import { OAUTH_TYPE } from '@/constants';

import * as S from './Login.style';

function Login() {
  const { getOAuthUrl } = useGetLoginUrl();

  return (
    <S.AuthContainer>
      <S.AuthBox>
        <S.LoginText>Login</S.LoginText>

        <S.OAuthBundle>
          <S.OAuthButton
            bgColor="#ffe80f"
            fontColor="#402a26"
            onClick={() => getOAuthUrl(OAUTH_TYPE.KAKAO)}
          >
            <S.OAuthIcon
              src={KAKAO_ICON.src}
              width={KAKAO_ICON.width}
              height={KAKAO_ICON.height}
              alt="kakao logo"
            />
            Kakao
          </S.OAuthButton>

          <S.OAuthButton
            bgColor="#fff"
            fontColor="black"
            onClick={() => getOAuthUrl(OAUTH_TYPE.GOOGLE)}
          >
            <S.OAuthIcon
              src={GOOGLE_ICON.src}
              width={GOOGLE_ICON.width}
              height={GOOGLE_ICON.height}
              alt="google logo"
            />
            Google
          </S.OAuthButton>
        </S.OAuthBundle>
      </S.AuthBox>
    </S.AuthContainer>
  );
}

export default Login;
