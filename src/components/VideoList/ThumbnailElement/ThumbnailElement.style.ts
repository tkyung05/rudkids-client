import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const ItemElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ThumbnailContainer = styled.div`
  width: 44vw;
  height: 24.78vw;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 92vw;
    height: 51.81vw;
  }
`;

export const ThumbnailImg = styled(Image)`
  width: 100%;
  height: 100%;

  transition: border-radius 0.3s linear;

  &:hover {
    border-radius: 4rem;
  }
`;

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 40%;
  min-height: 100%;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 100%;
    min-height: auto;

    margin-top: 7rem;
  }
`;

export const VideoName = styled.div`
  width: 100%;

  margin-bottom: 5rem;

  font-weight: bold;
  font-size: 7rem;

  color: ${PALETTE.BLACK};

  white-space: nowrap;
`;

export const VideoDescription = styled.div`
  width: 100%;

  font-size: 5rem;
  color: ${PALETTE.BLACK};

  word-break: break-word;
`;

export const VideoItemLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 2.5rem;

  border-radius: 9rem;

  font-weight: bold;
  font-size: 5.5rem;
  color: ${PALETTE.YELLOW};
  background-color: ${PALETTE.RED};

  &,
  * {
    white-space: nowrap;
  }
`;

export const ItemBuyNowText = styled.strong`
  padding: 0 2rem;

  font-size: 5rem;

  color: ${PALETTE.RED};
`;
