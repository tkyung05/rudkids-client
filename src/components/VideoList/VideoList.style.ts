import styled from 'styled-components';

import { FONT, PALETTE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;

  padding: ${HEADER_HEIGHT} 0 40rem 0;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const PageTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 92.5vw;

  margin-top: 5rem;

  font-family: ${FONT.THE_MESHROOM};
  font-size: 8rem;

  color: ${PALETTE.BLACK};
`;
