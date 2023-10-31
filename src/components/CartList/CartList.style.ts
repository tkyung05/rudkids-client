import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: calc(${HEADER_HEIGHT} + 25rem) 0 50vh 0;

  background-color: ${PALETTE.BLUE};
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 140rem;

  padding: 10rem;

  border-radius: 5rem;

  background-color: ${PALETTE.YELLOW_LIGHT};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 85%;

    padding: 4rem;
  }
`;

export const CartTitle = styled.div`
  width: 100%;

  margin-bottom: 15rem;
  padding-bottom: 3rem;

  font-size: 10rem;

  font-family: ${FONT.BELANOSIMA};
  color: ${PALETTE.RED_2};

  border-bottom: 2px solid ${PALETTE.BLACK};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    font-size: 8.5rem;
  }
`;

export const CartItemListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-top: 20rem;
`;

export const TotalAmount = styled.p`
  font-size: 7rem;
  color: ${PALETTE.BLACK};

  white-space: normal;
`;

export const CartCheckout = styled.button`
  padding: 1rem 10rem 2rem 10rem;
  margin-top: 10rem;
  border-radius: 7rem;

  font-size: 7rem;

  color: ${PALETTE.WHITE};
  background-color: ${PALETTE.RED};
  transition: color 0.15s;

  &:hover {
    color: ${PALETTE.GRAY_2};
  }
`;
