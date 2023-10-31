import Link from 'next/link';

import { ProductListType } from '@/@types/product';

import { PATH, QUERY_KEY } from '@/constants';

import ProductElement from '../ProductElement';
import * as S from './ProductList.style';

function ProductListView(props: { productList: ProductListType[] }) {
  return (
    <S.ProductListContainer>
      {props.productList?.map((productList) =>
        productList.content?.map((product) => (
          <Link
            href={
              product.title === 'MYSTERY'
                ? {
                    pathname: PATH.MYSTERY_DETAIL,
                    query: { [QUERY_KEY.MYSTERY_ID]: product.productId },
                  }
                : {
                    pathname: PATH.PRODUCT_DETAIL,
                    query: { [QUERY_KEY.PRODUCT_ID]: product.productId },
                  }
            }
            key={product.productId}
          >
            <ProductElement
              frontImg={product.frontImageUrl}
              backImg={product.backImageUrl}
              title={product.title}
            />
          </Link>
        ))
      )}
    </S.ProductListContainer>
  );
}

export default ProductListView;
