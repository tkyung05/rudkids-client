import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Input = styled.input`
  width: 70%;
  height: 7rem;

  padding: 0.5rem 2rem;

  border-radius: 8rem;
  border: 1.5px solid ${PALETTE.BLACK};

  font-size: 4rem;

  background-color: ${PALETTE.WHITE};
`;

export const Button = styled.button`
  padding: 2.5rem 14rem;
  margin-top: 8rem;

  border-radius: 7.5rem;

  font-size: 4.5rem;
  font-weight: bold;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLUE};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

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
  white-space: nowrap;
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
