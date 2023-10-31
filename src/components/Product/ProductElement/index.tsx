import * as S from './ProductElement.style';

interface ProductElementPropsType {
  frontImg: string;
  backImg: string;
  title: string;
}

function ProductElement(props: ProductElementPropsType) {
  return (
    <S.Container>
      <S.ProductImageContainer>
        <S.ProductImage
          className="front"
          src={props.frontImg}
          alt={props.title}
          width={1000}
          height={1000}
        />
        <S.ProductImage className="back" src={props.backImg} alt="" width={1000} height={1000} />
      </S.ProductImageContainer>
    </S.Container>
  );
}

export default ProductElement;
