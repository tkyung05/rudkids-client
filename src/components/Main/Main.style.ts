import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20rem 0 20rem 0;
`;

export const ImageContent = styled(Image)`
  width: 100vw;
  height: 85vh;

  margin-top: ${HEADER_HEIGHT};

  object-fit: cover;
  object-position: center;
`;

export const VideoContent = styled.iframe`
  width: 100vw;
  height: 50vw;

  margin-top: ${HEADER_HEIGHT};
`;
