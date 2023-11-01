import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;

  margin-top: 10rem;
`;

export const OrderDay = styled.div`
  font-weight: bold;
  font-size: 5rem;
  color: ${PALETTE.YELLOW_LIGHT};
`;

export const DetailOrderButton = styled.div`
  font-weight: bold;
  font-size: 5rem;
  color: ${PALETTE.WHITE};

  transition: color 0.15s linear;

  &:hover {
    color: ${PALETTE.GRAY_2};
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  margin: 10rem 0;
  padding: 2rem 5rem;

  border-radius: 4rem;

  background-color: ${PALETTE.BLUE};
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
