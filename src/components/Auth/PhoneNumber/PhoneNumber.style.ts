import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { FONT, PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT});

  padding-top: ${HEADER_HEIGHT};

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ValidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100rem;

  padding-top: 35rem;
`;

export const ValidForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  margin-top: 5rem;
`;

export const Title = styled.p`
  font-family: ${FONT.ULTRA};
  font-size: 8rem;

  color: ${PALETTE.RED_2};
`;

export const FieldName = styled.p`
  margin: 1.5rem 0;

  font-size: 4.5rem;
  color: ${PALETTE.BLACK};
`;

export const UserFieldInput = styled.input<{ widthSize: string }>`
  width: ${({ widthSize }) => widthSize};
  height: 10rem;

  padding-left: 4rem;

  border-radius: 10rem;
  border: 2px solid ${PALETTE.BLACK};

  font-size: 5rem;
  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.WHITE};

  &:disabled {
    color: ${PALETTE.GRAY_2};
    background-color: ${PALETTE.GRAY};
  }
`;

export const NumberInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 5rem;
`;

export const NumberSendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;

  border-radius: 10rem;
  border: 2px solid ${PALETTE.BLACK};

  font-size: 5rem;

  color: ${PALETTE.WHITE};
  background-color: ${PALETTE.BLACK};

  transition: color 0.15s linear;
  &:hover {
    color: ${PALETTE.GRAY_2};
  }
  &:disabled {
    color: ${PALETTE.GRAY_2};
  }
`;

export const AuthTimer = styled.p`
  width: 25%;

  font-size: 6.5rem;

  color: ${PALETTE.RED_2};
`;
