import styled from 'styled-components';

import { RESPONSIVE } from '@/constants/style';

export const ListContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(1, 80vw);

  column-gap: 5vw;
  row-gap: 30rem;

  padding-top: 20rem;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    grid-template-columns: repeat(1, 92vw);
  }
`;
