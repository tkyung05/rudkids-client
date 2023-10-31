import { useRef } from 'react';

import { useGetVideoThumbnailList } from '@/hooks/@queries/video';
import useObserver from '@/hooks/useObserver';

import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import Loading from '../@common/Loading';
import VideoListView from './VideoList.view';

function VideoList() {
  const { data: videoThumbnailListData, status, fetchNextPage } = useGetVideoThumbnailList();

  const scrollPoint = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useObserver(scrollPoint, onIntersect);

  return (
    <>
      {(status === STATUS_TYPE.LOADING || status === STATUS_TYPE.ERROR) && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && videoThumbnailListData && (
        <VideoListView videoThumbnailListData={videoThumbnailListData.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default VideoList;
