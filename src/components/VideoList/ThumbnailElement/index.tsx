import Link from 'next/link';

import { ThumbnailElementType } from '@/@types/video';

import { PATH, QUERY_KEY } from '@/constants';

import { getDefaultToQueryKeyText } from '@/utils/validation';

import * as S from './ThumbnailElement.style';

function ThumbnailElement(props: ThumbnailElementType) {
  return (
    <S.ItemElementContainer>
      <Link
        href={{
          pathname: PATH.VIDEO_DETAIL,
          query: { [QUERY_KEY.ITEM_NAME]: getDefaultToQueryKeyText(props.name) },
        }}
      >
        <S.ThumbnailContainer>
          <S.ThumbnailImg
            src={props.imageUrl}
            alt={props.name + ' 썸네일 이미지'}
            width={10000}
            height={10000}
          />
        </S.ThumbnailContainer>
      </Link>

      <S.VideoInfoContainer>
        <S.VideoName>{props.name}</S.VideoName>

        <S.VideoDescription>{props.videoBio}</S.VideoDescription>

        <Link
          href={{
            pathname: PATH.ITEM_DETAIL,
            query: { [QUERY_KEY.ITEM_NAME]: getDefaultToQueryKeyText(props.name) },
          }}
          style={{ paddingTop: '10rem' }}
        >
          <S.VideoItemLink>Buy Now</S.VideoItemLink>
        </Link>
      </S.VideoInfoContainer>
    </S.ItemElementContainer>
  );
}

export default ThumbnailElement;
