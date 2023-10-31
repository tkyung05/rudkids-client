import { VideoThumbnailListType } from '@/@types/video';

import ThumbnailElement from '../ThumbnailElement';
import * as S from './List.style';

function List(props: { thumbnailList: VideoThumbnailListType[] }) {
  return (
    <S.ListContainer>
      {props.thumbnailList.map((thumbnails) =>
        thumbnails.content.map((thumbnail) => (
          <ThumbnailElement
            imageUrl={thumbnail.imageUrl}
            videoBio={thumbnail.videoBio}
            name={thumbnail.name}
            key={thumbnail.name}
          />
        ))
      )}
    </S.ListContainer>
  );
}

export default List;
