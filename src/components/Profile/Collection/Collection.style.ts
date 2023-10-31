import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 60%;

  padding-top: 7rem;
`;

export const ListContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 55rem);
  column-gap: 5vw;
  row-gap: 20rem;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    grid-template-columns: repeat(3, 65rem);
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    grid-template-columns: repeat(2, 40vw);
    row-gap: 15rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 60%;

  padding-top: 10rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 75%;
  }
`;

export const CategoryButton = styled.div<{ isClick: boolean }>`
  margin: 3.5rem;
  padding: 2rem 6rem;

  border-radius: 10rem;

  font-size: 4.5rem;
  color: ${PALETTE.WHITE};
  background-color: ${(p) => (p.isClick ? PALETTE.RED : PALETTE.BLUE)};
`;
