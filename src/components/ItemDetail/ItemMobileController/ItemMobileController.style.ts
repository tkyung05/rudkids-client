import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const MobileBuyController = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 99;

  display: none;

  width: 100vw;
  height: 25rem;

  background-color: ${PALETTE.BLACK};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BeforeMobileOption = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

export const ShareAndGiftBundle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 30rem;
`;

export const IconButton = styled(Image)`
  width: 8.5rem;
  height: auto;
`;

export const MobileOptionModalContainer = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 25rem;
  left: 0;

  width: 100vw;
  height: calc(100vh - 25rem);
`;

export const ModalBackgroundLayer = styled.div`
  z-index: 101;

  position: fixed;
  bottom: 25rem;
  left: 0;

  width: 100%;
  height: calc(100vh - 25rem);

  background-color: rgba(0, 0, 0, 0.4);
`;

export const MobileOptionContainer = styled.div`
  z-index: 102;
  position: fixed;
  bottom: 25rem;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const MobileOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 85%;

  padding: 5rem 0;
`;

export const ItemPrice = styled.div`
  font-size: 5.5rem;

  color: ${PALETTE.BLACK};
`;
