import { VideoThumbnailListType } from '@/@types/video';

import List from './List';
import * as S from './VideoList.style';

function VideoListView(props: { videoThumbnailListData: VideoThumbnailListType[] }) {
  return (
    <S.Container>
      <List thumbnailList={props.videoThumbnailListData} />
    </S.Container>
  );
}

export default VideoListView;
