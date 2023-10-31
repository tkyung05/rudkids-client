import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const ItemOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 5rem 0;
`;

export const ItemOptionName = styled.div`
  font-size: 4.5rem;
  color: ${PALETTE.BLACK};
`;
