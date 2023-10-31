import * as S from './ItemElement.style';

interface ItemElementPropsType {
  itemImage: string;
  alt: string;
  itemName: string;
  itemPrice: number;
}

function ItemElement(props: ItemElementPropsType) {
  return (
    <S.ItemElementContainer>
      <S.ItemImageBox>
        <S.ItemImage src={props.itemImage} alt={props.alt} width={1000} height={1000} />
      </S.ItemImageBox>

      <S.ItemName>{props.itemName}</S.ItemName>
      <S.ItemPrice>{props.itemPrice}</S.ItemPrice>
    </S.ItemElementContainer>
  );
}

export default ItemElement;
