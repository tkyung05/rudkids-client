import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const Title = styled.div`
  margin-bottom: 3rem;

  font-size: 7rem;
  font-weight: bold;

  white-space: nowrap;

  color: ${PALETTE.RED_2};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  padding: 40rem 0;

  background-color: ${PALETTE.BLUE};

  &,
  * {
    font-family: ${FONT.NOTO_SANS};
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 55%;

  padding-top: 10rem;

  background-color: ${PALETTE.YELLOW_LIGHT};

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 75%;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 90%;

    * {
      #info-tag-img {
        display: none;
      }
    }
  }
`;

export const OrderTopDeco = styled(Image)`
  width: 55%;
  height: auto;

  transform: rotate(180deg);

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 75%;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 90%;
  }
`;

export const OrderDecoImage = styled(Image)<{ size: string }>`
  width: ${(p) => p.size + '%'};
  height: auto;
`;

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 85%;
`;

export const PageTitle = styled.div`
  padding-bottom: 3rem;

  font-size: 7rem;
  font-weight: bold;

  color: ${PALETTE.BLACK};
  border-bottom: 3px solid ${PALETTE.BLACK};
`;

export const FieldBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 90%;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  padding-top: 7rem;
  margin-top: 10rem;

  border-top: 1rem dashed ${PALETTE.BLACK};
`;

export const FieldBundle = styled.div<{ default: string; mobile: string }>`
  width: ${(p) => p.default};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: ${(p) => p.mobile};
  }
`;
