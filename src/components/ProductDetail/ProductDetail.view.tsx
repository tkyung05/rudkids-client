import { useEffect, useState } from 'react';

import useGetWindowSize from '@/hooks/useGetWindowSize';

import { ProductDetailType } from '@/@types/product';

import { RESPONSIVE } from '@/constants/style';

import List from './List';
import * as S from './ProductDetail.style';
import SloganLabel from './SloganLabel';

function ProductDetailView(props: { productDetailData: ProductDetailType[] }) {
  const { curWidth } = useGetWindowSize();
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    setBannerImage(
      curWidth <= parseInt(RESPONSIVE.MOBILE.MAX_WIDTH)
        ? props.productDetailData[0].mobileImage.url
        : props.productDetailData[0].bannerImage.url
    );
  }, [curWidth]);

  return (
    <S.Container>
      <S.ProductDetailContainer>
        <S.BannerImageContainer
          src={bannerImage}
          alt="카테고리 배너 이미지"
          width={10000}
          height={10000}
        />
        <SloganLabel slogan={props.productDetailData[0].bio} />

        <List itemsList={props.productDetailData} />
      </S.ProductDetailContainer>
    </S.Container>
  );
}

export default ProductDetailView;
