import { CommunityElementType } from '@/@types/community';

import * as S from './MagazineElement.style';

function MagazineElement({ title, writer, image }: CommunityElementType) {
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

export default MagazineElement;
