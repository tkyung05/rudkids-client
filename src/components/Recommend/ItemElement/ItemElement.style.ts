import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const ItemImage = styled(Image)`
  height: 80%;
  width: auto;

  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

export const StatusTag = styled(Image)`
  width: 25rem;
  height: auto;
`;

export const ItemStatusContainer = styled.div`
  position: absolute;
  top: -2rem;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;

  width: 100%;

  perspective: 700px;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    top: -1rem;
  }
  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    top: 0.3vw;

    img {
      width: 15vw;
    }
  }
`;

export const ItemElementContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 2.5rem;

  transition: all 0.5s;

  p {
    position: absolute;
    left: 0;

    display: flex;
    justify-content: center;

    width: 100%;

    color: ${PALETTE.BLACK};
  }

  .status-badge {
    animation: coloring 1.5s infinite;
  }

  &,
  * {
    transition: transform 0.5s;
  }

  &:hover {
    @media (min-width: ${RESPONSIVE.LAPTOP.MAX_WIDTH}) {
      img {
        transform: rotateY(50deg);
      }
    }
  }
`;

export const ItemImageBox = styled.div`
  position: relative;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 55rem;
  width: 55rem;

  margin-bottom: 3rem;

  border-radius: 5rem;

  perspective: 700px;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 65rem;
    height: 65rem;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 40vw;
    height: 40vw;

    border-radius: 2vw;
  }
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding-top: 2rem;

  font-size: 4.5rem;
  color: ${PALETTE.BLACK};
`;

export const ItemPrice = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  font-size: 4rem;
  color: ${PALETTE.BLACK};
`;
