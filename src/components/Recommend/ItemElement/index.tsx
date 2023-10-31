import HOT_TAG from '@/assets/png/hot_tag.png';

// import SOLD_OUT_TAG from '@/assets/svg/soldout_tag.svg';
import * as S from './ItemElement.style';

interface ItemElementPropsType {
  itemImage: string;
  alt: string;
  itemName: string;
  itemPrice: number;
  itemId: string;
  itemStatus: string;
  ordering: number;
}

function ItemElement(props: ItemElementPropsType) {
  return (
    <S.ItemElementContainer key={props.itemId}>
      {props.ordering < 4 && (
        <S.ItemStatusContainer>
          <S.StatusTag
            src={HOT_TAG.src}
            alt="인기상품 태그"
            width={HOT_TAG.width}
            height={HOT_TAG.height}
          />
        </S.ItemStatusContainer>
      )}

      <S.ItemImageBox>
        <S.ItemImage src={props.itemImage} alt={props.alt} width={1000} height={1000} />
      </S.ItemImageBox>
      <S.ItemName>{props.itemName}</S.ItemName>
      <S.ItemPrice>{props.itemPrice}</S.ItemPrice>
    </S.ItemElementContainer>
  );
}

export default ItemElement;
