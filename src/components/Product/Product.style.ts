import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  padding: ${HEADER_HEIGHT} 0 50rem 0;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20rem;
`;
