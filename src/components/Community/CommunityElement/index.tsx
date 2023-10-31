import { CommunityElementType } from '@/@types/community';

import * as S from './CommunityElement.style';

function CommunityElement({ title, writer, image }: CommunityElementType) {
  return (
    <S.Container>
      <S.ThumbNailBox>
        <S.ThumbNail src={image} alt={title} />
      </S.ThumbNailBox>

      <S.Title>{title}</S.Title>
      <S.Title>{writer}</S.Title>
    </S.Container>
  );
}

export default CommunityElement;
