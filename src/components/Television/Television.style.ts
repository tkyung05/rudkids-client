import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT});

  padding-top: ${HEADER_HEIGHT};

  background-color: ${PALETTE.BLUE};
`;

export const TvFrameContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 230rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 100%;

    transform: rotate(90deg);
  }
`;

export const TvFrameImage = styled(Image)`
  z-index: 1;

  width: 100%;
  height: auto;
`;

export const TvScreenImage = styled(Image)`
  position: absolute;
  top: 15%;
  left: 12%;

  width: 65%;
  height: auto;
`;

export const TvScreenVideoContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 12%;

  width: 65%;
  height: 62.5%;
`;
