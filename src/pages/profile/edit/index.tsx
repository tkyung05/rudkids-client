import { NextSeo } from 'next-seo';

import ProfileEditor from '@/components/Profile/ProfileEditor';

import { PATH } from '@/constants';

function ProfilePage() {
  return (
    <>
      <NextSeo
        title="My Profile Edit"
        description="프로필 수정 페이지"
        canonical={PATH.CLIENT_URL + PATH.PROFILE_EDIT}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.PROFILE_EDIT}`,
        }}
      />

      <ProfileEditor />
    </>
  );
}

export default ProfilePage;
