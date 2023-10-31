import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: calc(${HEADER_HEIGHT} + 20rem) 0 40vh 0;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;
