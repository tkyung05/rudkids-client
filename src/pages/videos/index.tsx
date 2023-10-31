import { NextSeo } from 'next-seo';

import VideoList from '@/components/VideoList';

import { PATH } from '@/constants';

function VideoPage() {
  return (
    <>
      <NextSeo
        title="Videos"
        description="영상 리스트 페이지"
        canonical={PATH.CLIENT_URL + PATH.VIDEO_LIST}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.VIDEO_LIST}`,
        }}
      />

      <VideoList />
    </>
  );
}

export default VideoPage;
