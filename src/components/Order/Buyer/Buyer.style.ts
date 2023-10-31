import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  padding: 0.5rem;

  &,
  * {
    font-size: 5rem;

    color: ${PALETTE.BLACK};
  }
`;

export const FieldName = styled.div`
  padding-right: 4rem;

  font-weight: bold;
`;
