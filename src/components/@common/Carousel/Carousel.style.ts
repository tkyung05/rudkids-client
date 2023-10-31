import Image from 'next/image';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { PALETTE } from '@/constants/style';

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: ${PALETTE.RED};
  }
`;

export const SwiperImage = styled(Image)<{ imagePosition: string }>`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: ${(p) => p.imagePosition};
`;
