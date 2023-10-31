import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: ${PALETTE.YELLOW_LIGHT};

  &,
  * {
    font-family: ${FONT.NOTO_SANS};
  }
`;

export const PaymentInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;

  margin-top: 40rem;
  padding: 8rem;

  border-radius: 4rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 85%;
  }
`;

export const ErrorText = styled.div`
  font-weight: bold;
  font-size: 7rem;

  color: ${PALETTE.BLACK};
`;

export const ErrorIcon = styled(Image)`
  width: 30%;
  height: auto;

  margin: 5rem 0 10rem 0;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 55%;
  height: 12rem;

  margin: 7rem 0 5rem 0;

  border-radius: 4rem;

  font-size: 4.5rem;

  color: ${PALETTE.WHITE};
  background-color: #f74951;
`;
