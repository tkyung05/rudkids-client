import styled from 'styled-components';

import { RESPONSIVE } from '@/constants/style';

export const ProductListContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 65rem);

  column-gap: 20rem;
  row-gap: 20rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    grid-template-columns: repeat(2, 30vw);
    column-gap: 10vw;
  }
`;
