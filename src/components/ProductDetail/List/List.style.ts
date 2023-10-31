import styled from 'styled-components';

import { RESPONSIVE } from '@/constants/style';

export const ListContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 55rem);
  column-gap: 5vw;
  row-gap: 35rem;

  padding-top: 20rem;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    grid-template-columns: repeat(3, 65rem);
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    grid-template-columns: repeat(2, 40vw);
    row-gap: 10rem;
  }
`;
