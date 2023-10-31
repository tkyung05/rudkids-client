import Image from 'next/image';
import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  padding: calc(${HEADER_HEIGHT} + 17.5rem) 0 20rem 0;

  &,
  * {
    font-family: ${FONT.NOTO_SANS};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  &,
  * {
    font-size: 5rem;

    color: ${PALETTE.GRAY_3};
  }
`;

export const OrderInfo = styled.div`
  font-weight: bold;
  font-size: 7.5rem;
  color: ${PALETTE.RED};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    font-size: 6.5rem;
  }
`;

export const FieldName = styled.div`
  padding-right: 4rem;

  font-weight: bold;
  white-space: nowrap;

  color: ${PALETTE.BLACK};
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 60%;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 80%;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 60%;

  margin: 10rem 0;
  padding: 2rem 5rem;

  border-radius: 4rem;

  background-color: ${PALETTE.BLUE};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 80%;
  }
`;

export const OrderItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin: 4rem 0;
  padding: 3rem 0;

  border-radius: 4rem;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ItemStatus = styled.div`
  font-weight: bold;
  font-size: 5.5rem;
  color: ${PALETTE.WHITE};
`;

export const ItemImage = styled(Image)`
  width: 15%;
  height: auto;

  padding-left: 5rem;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 75%;
  height: 100%;
`;

export const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 6rem;
`;

export const ItemName = styled.div`
  font-size: 5.5rem;
  color: ${PALETTE.BLACK};

  word-break: break-word;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    font-size: 4.5rem;
  }
`;

export const ItemPrice = styled.div`
  font-size: 4.5rem;
  color: ${PALETTE.BLACK};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    font-size: 4rem;
  }
`;

export const VirtualAccountInfo = styled.h1`
  font-size: 6rem;
  color: ${PALETTE.BLACK};
`;

export const CancelButton = styled.button`
  padding: 2rem 5rem;
  margin-top: 10rem;

  border-radius: 2rem;

  font-weight: bold;
  font-size: 5rem;

  background-color: ${PALETTE.RED};
  color: ${PALETTE.YELLOW_LIGHT};
`;
