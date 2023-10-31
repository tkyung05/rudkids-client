import * as S from './Product.style';
import ProductList from './ProductList';

function Product() {
  return (
    <S.Container>
      <S.ProductContainer>
        <ProductList />
      </S.ProductContainer>
    </S.Container>
  );
}

export default Product;
