import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: ${PALETTE.RED};
`;
