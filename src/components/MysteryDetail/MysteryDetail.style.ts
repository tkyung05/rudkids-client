import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  background-color: ${PALETTE.YELLOW_LIGHT};

  padding: ${HEADER_HEIGHT} 0 50rem 0;

  overflow: hidden;
`;

export const MyteryDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30rem;
`;

export const Title = styled.div`
  margin: 10rem;

  padding: 1.5rem 8rem 1.5rem 8rem;

  font-size: 8rem;

  color: ${PALETTE.YELLOW};
  background-color: ${PALETTE.RED_2};

  border-radius: 16rem;
  border: 1rem solid ${PALETTE.RED_2};
`;

export const BannerImageContainer = styled(Image)`
  width: 100vw;
  height: 85vh;

  object-fit: cover;
  object-position: center;
`;
