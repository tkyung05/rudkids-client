import styled from 'styled-components';

import { FONT, PALETTE } from '@/constants/style';

export const Container = styled.div`
  background-color: ${PALETTE.WHITE};
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 15rem;
  margin-bottom: 30rem;
`;

export const Title = styled.h1`
  margin: 15rem;

  font-family: ${FONT.PLAYFAIR}, serif;
  font-size: 15rem;

  color: ${PALETTE.BLACK};
`;
