import { CollectionType } from '@/@types/collection';

import * as S from './ItemElement.style';

function ItemElement(props: CollectionType) {
  return (
    <S.ItemElementContainer>
      <S.ItemImageBox>
        <S.ItemImage src={props.imageUrl} alt={props.itemName} width={1000} height={1000} />
      </S.ItemImageBox>
    </S.ItemElementContainer>
  );
}

export default ItemElement;
