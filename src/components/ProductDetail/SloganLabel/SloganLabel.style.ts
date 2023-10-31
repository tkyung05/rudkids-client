import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 13rem;

  background-color: ${PALETTE.RED_2};
`;

export const SloganContainer = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-99vw);
    }
  }

  animation: slide 13s linear alternate infinite;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    animation: slide 10s linear alternate infinite;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    animation: slide 7s linear alternate infinite;
  }
`;

export const SloganBox = styled.div`
  display: flex;
`;

export const SloganText = styled.p`
  padding: 0 10rem;

  font-family: ${FONT.BELANOSIMA};
  font-size: 7rem;

  color: ${PALETTE.YELLOW};

  white-space: nowrap;
`;
