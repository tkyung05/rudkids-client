import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin: 2rem 0;
`;

export const ItemName = styled.div`
  width: 70%;

  font-weight: bold;
  font-size: 5rem;

  color: ${PALETTE.BLACK};
  word-break: break-all;
`;

export const ItemAmount = styled.div`
  width: 20%;

  font-size: 5rem;

  color: ${PALETTE.BLACK};
`;
