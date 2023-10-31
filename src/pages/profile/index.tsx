import { NextSeo } from 'next-seo';

import Profile from '@/components/Profile';

import { PATH } from '@/constants';

function ProfilePage() {
  return (
    <>
      <NextSeo
        title="My Profile"
        description="회원 페이지"
        canonical={PATH.CLIENT_URL + PATH.PROFILE}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.PROFILE}`,
        }}
      />

      <Profile />
    </>
  );
}

export default ProfilePage;
