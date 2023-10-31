import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Input = styled.input`
  appearance: none;
  width: 7.5rem;
  height: 7.5rem;

  margin-right: 2.5rem;

  border: 2px solid ${PALETTE.GRAY_3};
  border-radius: 1rem;

  &:checked {
    background-color: ${PALETTE.BLUE};
  }

  cursor: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  cursor: none;
`;

export const Text = styled.p`
  font-size: 5rem;

  cursor: none;
`;
