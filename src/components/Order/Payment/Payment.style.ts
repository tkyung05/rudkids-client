import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  width: 100%;
  min-height: 100rem;

  margin-bottom: 10rem;
`;

export const PaymentsButton = styled.button`
  width: 100%;

  margin-top: 10rem;
  padding: 3rem 0;

  border-radius: 9rem;

  font-size: 6rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLUE};
`;
