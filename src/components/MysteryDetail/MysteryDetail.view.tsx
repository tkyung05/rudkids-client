import { useEffect, useState } from 'react';

import useGetWindowSize from '@/hooks/useGetWindowSize';

import { ProductDetailType } from '@/@types/product';

import { RESPONSIVE } from '@/constants/style';

import List from './List';
import * as S from './MysteryDetail.style';
import SloganLabel from './SloganLabel';

function MysteryDetailView(props: { mysteryDetailData: ProductDetailType[] }) {
  const { curWidth } = useGetWindowSize();
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    setBannerImage(
      curWidth <= parseInt(RESPONSIVE.MOBILE.MAX_WIDTH)
        ? props.mysteryDetailData[0].mobileImage.url
        : props.mysteryDetailData[0].bannerImage.url
    );
  }, [curWidth]);

  return (
    <S.Container>
      <S.MyteryDetailContainer>
        <S.BannerImageContainer
          src={bannerImage}
          alt="카테고리 배너 이미지"
          width={10000}
          height={10000}
        />
        <SloganLabel slogan={props.mysteryDetailData[0].bio} />

        <List itemsList={props.mysteryDetailData} />
      </S.MyteryDetailContainer>
    </S.Container>
  );
}

export default MysteryDetailView;
