import Image from 'next/image';
import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT});

  padding-top: ${HEADER_HEIGHT};

  overflow: hidden;
`;

export const BackgroundLayer = styled.div`
  z-index: 101;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div`
  z-index: 102;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120rem;
  height: 120rem;

  margin: 30rem auto;

  background-color: ${PALETTE.YELLOW_LIGHT};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 80%;
  }
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  height: 90%;

  overflow: scroll;
`;

export const CloseButton = styled.button`
  width: 30%;

  padding: 1.5rem;
  margin: 3rem 0;

  border-radius: 5.5rem;

  font-size: 4rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.RED_2};
`;

export const TitleImage = styled(Image)`
  width: 80%;
  height: auto;

  margin: 3rem;
`;

export const DeliveryInfoContainer = styled.div<{ isBasic: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;

  margin: 5rem 0;
  padding: 5rem 0;

  border-radius: 3rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  background-color: ${(p) => (p.isBasic ? '#fff7b8' : '#fffded')};

  transition: background-color 0.15s linear;
  &:hover {
    background-color: #fff7b8;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 80%;

  padding: 0.5rem;

  &,
  * {
    font-size: 4.5rem;

    color: ${PALETTE.BLACK};
  }
`;

export const FieldName = styled.div`
  padding-right: 4rem;

  font-weight: bold;
`;

export const PlusDeliveryInfoButton = styled.button`
  width: 80%;

  margin: 10rem 0;
  padding: 3rem;

  border-radius: 7.5rem;

  font-size: 4.5rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLUE};
`;

export const OrderTopDeco = styled(Image)`
  position: absolute;
  top: -2.7rem;

  width: 100%;
  height: auto;

  transform: rotate(180deg);

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    top: -1.9vw;
  }
`;

export const OrderBottomDeco = styled(Image)`
  position: absolute;
  bottom: -2.7rem;

  width: 100%;
  height: auto;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    bottom: -1.9vw;
  }
`;
