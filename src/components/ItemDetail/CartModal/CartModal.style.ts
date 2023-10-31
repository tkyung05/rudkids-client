import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  position: absolute;
  bottom: 20rem;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 65rem;
  height: 25rem;

  border-radius: 2rem;
  border: 0.4rem solid ${PALETTE.BLACK};

  background-color: ${PALETTE.YELLOW_LIGHT};

  overflow: hidden;
`;

export const CloseButton = styled.button`
  width: 100%;
  height: 7rem;

  font-size: 4rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLACK};
`;

export const InfoText = styled.p`
  font-size: 4rem;
  color: ${PALETTE.BLACK};
`;

export const MoveCartButton = styled.button`
  width: 100%;
  height: 6.5rem;

  font-size: 4rem;

  border-top: 0.4rem solid ${PALETTE.BLACK};

  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.YELLOW_LIGHT};

  transition: 0.15s linear;
  &:hover {
    color: ${PALETTE.YELLOW_LIGHT};
    background-color: ${PALETTE.BLACK};
  }
`;
