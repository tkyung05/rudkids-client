import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const ItemImage = styled(Image)`
  height: 70%;
  width: auto;

  object-position: center;

  transform: translateZ(10rem);

  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

export const ItemElementContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 2.5rem;

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
  display: flex;
  align-items: center;
  justify-content: center;

  height: 55rem;
  width: 55rem;

  border-radius: 2rem;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 65rem;
    height: 65rem;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 40vw;
    height: 40vw;
  }

  perspective: 700px;
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding-top: 2.5rem;

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
