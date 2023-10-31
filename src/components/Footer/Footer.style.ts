import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.footer`
  position: relative;

  display: flex;

  height: 55rem;

  padding-bottom: 10rem;

  background-color: ${PALETTE.BLACK};

  * {
    font-family: ${FONT.NOTO_SANS};
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 15rem;
`;

export const ContentText = styled.div<{ isTitle: boolean }>`
  margin: ${({ isTitle }) => (isTitle ? '6rem 0 6rem 5rem' : '2rem 0 2rem 5rem')};

  font-size: 4rem;

  color: ${PALETTE.YELLOW_LIGHT};

  &:hover {
    .information-box {
      display: flex;
    }
  }
`;

export const InformationBox = styled.div`
  position: absolute;
  top: -16rem;
  left: 4rem;

  display: none;
  flex-direction: column;

  width: 70rem;
  height: auto;

  padding: 1.5rem;

  border: 0.4rem solid ${PALETTE.BLACK};
  border-radius: 3rem;

  font-size: 3rem;
  color: ${PALETTE.BLACK};

  background-color: ${PALETTE.YELLOW_LIGHT};

  word-break: break-word;
`;
