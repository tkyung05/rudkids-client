import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: calc(${HEADER_HEIGHT} + 20rem);

  background-color: ${PALETTE.YELLOW_LIGHT};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    padding-top: ${HEADER_HEIGHT};
  }
`;

export const ItemMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 40rem;

  width: 80%;
  height: auto;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 90%;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    flex-direction: column;
    align-items: center;
    width: 85%;
  }
`;

export const ItemImageContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    display: none;
  }
`;

export const ItemImage = styled(Image)`
  width: 100%;
  height: auto;

  margin-bottom: 5rem;

  object-fit: cover;
`;

export const ItemInfoContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: calc(${HEADER_HEIGHT} + 20rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 40%;
  height: 100%;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 100%;
    padding: 5rem 0 50rem 0;
  }
`;

export const ItemOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  border-radius: 5rem;

  background-color: #fff6b3;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    background-color: ${PALETTE.YELLOW_LIGHT};
  }
`;

export const ItemOrderBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80%;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 100%;
  }
`;

export const ItemLaptopInfoBundle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    display: none;
  }
`;

export const ItemEnName = styled.p`
  text-align: center;

  padding-top: 7rem;

  font-weight: bold;
  font-size: 8rem;

  color: ${PALETTE.BLACK};
`;

export const ItemKoName = styled.div`
  width: 100%;

  padding-bottom: 2rem;

  font-weight: bold;
  font-size: 4rem;

  border-bottom: 2.5px solid ${PALETTE.BLACK};

  color: ${PALETTE.BLACK};
`;

export const LimitedTag = styled.div`
  margin-top: 1rem;

  font-size: 5rem;
  font-weight: bold;

  color: ${PALETTE.RED};
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 45vw;

  padding-top: 7rem;

  @media (min-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    display: none;
  }
`;

export const ItemPrice = styled.div`
  font-size: 5.5rem;

  color: ${PALETTE.BLACK};
`;

export const AddToCartButton = styled.button<{ size: string }>`
  width: ${(p) => p.size};
  height: 10rem;

  margin: 5rem 0 5rem 0;

  border-radius: 3rem;

  font-weight: bold;
  font-size: 4rem;

  background-color: ${PALETTE.RED_2};
  color: ${PALETTE.WHITE};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${PALETTE.RED};
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    height: 13.5rem;

    font-size: 5.5rem;
  }
`;

export const MobileItemImageContainer = styled.div`
  display: none;

  position: relative;
  z-index: 0;

  width: 100vw;
  height: 120rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    display: block;
  }
`;
