import TV_FRAME from '@/assets/png/retro_tv_frame.png';
import TV_ERROR_SCREEN from '@/assets/png/tv_error_screen.png';
import { useState } from 'react';

import { useGetVideoDetail } from '@/hooks/@queries/video';

import { QUERY_KEY } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';

import { getSearchParam } from '@/utils';

import VideoPlayer from '../@common/VideoPlayer';
import * as S from './Television.style';

function Television() {
  const { data: video, status } = useGetVideoDetail(getSearchParam(QUERY_KEY.ITEM_NAME));
  const [isEndVideo, setIsEndVideo] = useState(false);

  const handleOffVideo = () => setIsEndVideo(true);

  return (
    <S.Container>
      <S.TvFrameContainer onClick={() => window.open(video?.videoUrl)}>
        <S.TvFrameImage src={TV_FRAME.src} alt="TV frame" width={1000} height={1000} />
        <S.TvScreenImage src={TV_ERROR_SCREEN.src} alt="error screen" width={1000} height={1000} />

        {isEndVideo && (
          <S.TvScreenImage
            src={TV_ERROR_SCREEN.src}
            alt="error screen"
            width={1000}
            height={1000}
          />
        )}

        {status === STATUS_TYPE.ERROR && (
          <S.TvScreenImage
            src={TV_ERROR_SCREEN.src}
            alt="error screen"
            width={1000}
            height={1000}
          />
        )}

        {status === STATUS_TYPE.SUCCESS && video && !isEndVideo && (
          <S.TvScreenVideoContainer>
            <VideoPlayer
              url={video.videoUrl}
              autoPlay
              muted={false}
              handleOffVideo={handleOffVideo}
            />
          </S.TvScreenVideoContainer>
        )}
      </S.TvFrameContainer>
    </S.Container>
  );
}

export default Television;
