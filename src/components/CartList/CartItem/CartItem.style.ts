import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  margin-bottom: 10rem;
`;

export const ItemImage = styled(Image)`
  width: 25rem;
  height: auto;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 15rem;
  }
`;

export const ItemInfoBundle = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectButtonContainer = styled.div`
  display: flex;

  input:default ~ label {
    .check-icon {
      stroke: transparent;
    }
  }
  input:checked ~ label {
    border: 2px solid ${PALETTE.BLACK};

    .check-icon {
      stroke: ${PALETTE.BLACK};
      animation: dash 0.3s linear alternate 1;
    }
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 60;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const SelectButton = styled.label`
  width: 7rem;
  height: 7rem;

  margin-right: 10rem;

  border-radius: 2rem;
  border: 2px solid ${PALETTE.GRAY_2};

  background-color: transparent;

  .check-icon {
    fill: none;
    stroke: ${PALETTE.BLACK};
    stroke-width: 10px;
    stroke-miterlimit: 10;
    stroke-dashoffset: 0;
    stroke-dasharray: 60;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    margin-right: 6rem;
  }
`;

export const ItemTextBundle = styled.div`
  display: flex;
  flex-direction: column;

  width: 70rem;

  @media (max-width: ${RESPONSIVE.LAPTOP.MAX_WIDTH}) {
    width: 60rem;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 40vw;
  }

  @media (max-width: 350px) {
    width: 25rem;
  }
`;

export const ItemInfoText = styled.div`
  width: 90%;

  font-size: 5rem;
  color: ${PALETTE.BLACK};

  margin: 0 0 2rem 3rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const CartCalculateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemQuantityContainer = styled.div`
  display: flex;
`;

export const Quantity = styled.p`
  font-size: 5.5rem;
  color: ${PALETTE.BLACK};

  margin: auto 5rem;
`;

export const QuantityControllerBundle = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  padding: 0.5rem 0.5rem 0.7rem 0.6rem;

  border-radius: 50%;
  font-size: 4.5rem;

  background-color: ${PALETTE.GRAY_2};
  transition: background-color 0.3s;
  color: ${PALETTE.WHITE};

  &:hover {
    background-color: ${PALETTE.BLACK};
  }
`;

export const ItemRemoveButton = styled.button`
  margin: 5rem 3rem;

  font-size: 4.5rem;
  color: ${PALETTE.GRAY_2};
  transition: color 0.3s;

  &:hover {
    color: ${PALETTE.RED_2};
  }
`;
