import { NextSeo } from 'next-seo';

import Login from '@/components/Auth/Login';

import { PATH } from '@/constants';

function AuthPage() {
  return (
    <>
      <NextSeo
        title="Login"
        description="로그인 페이지"
        canonical={PATH.CLIENT_URL + PATH.AUTH}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.AUTH}`,
        }}
      />

      <Login />
    </>
  );
}

export default AuthPage;
