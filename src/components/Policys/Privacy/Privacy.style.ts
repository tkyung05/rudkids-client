import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { FONT, PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: calc(${HEADER_HEIGHT} + 10rem) 0;

  background-color: ${PALETTE.YELLOW_LIGHT};

  * {
    font-family: ${FONT.NOTO_SANS};
  }
`;

export const ContentText = styled.p`
  width: 80%;

  font-size: 3.5rem;

  color: ${PALETTE.BLACK};
`;
