import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 65rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 30vw;
  }
`;

export const Title = styled.div`
  font-family: ${FONT.THE_MESHROOM};
  font-size: 7rem;

  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ProductImageContainer = styled.div`
  & .front {
    position: absolute;
  }

  @media (min-width: ${RESPONSIVE.LAPTOP.MAX_WIDTH}) {
    & .back {
      transform: rotateY(-180deg);
    }

    &:hover .front {
      transform: rotateY(180deg);
    }
    &:hover .back {
      transform: rotateY(0deg);
    }
  }
`;

export const ProductImage = styled(Image)`
  width: 65rem;
  height: 71.68rem;

  margin-bottom: 5rem;

  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.6);
  transition: 0.7s;
  backface-visibility: hidden;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 30vw;
    height: 33.08vw;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
`;
