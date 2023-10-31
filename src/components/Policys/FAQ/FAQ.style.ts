import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { FONT, PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  padding: calc(${HEADER_HEIGHT} + 15rem) 0;

  background-color: ${PALETTE.YELLOW_LIGHT};

  * {
    font-family: ${FONT.NOTO_SANS};
  }
`;

export const PolicyTitle = styled.h1`
  font-size: 8rem;
  color: ${PALETTE.BLACK};
`;

export const PolicyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;

  margin-top: 10rem;
`;

export const PolicyButton = styled.div`
  width: 100%;
`;

export const PolicyBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 10rem;

  padding-top: 5rem;

  font-size: 5rem;

  background-color: ${PALETTE.YELLOW_LIGHT};
  color: ${PALETTE.BLACK};
`;

export const Content = styled.div<{ isDropDown: boolean; height: string }>`
  display: flex;
  justify-content: flex-start;

  max-height: ${(p) => (p.isDropDown ? p.height + 'rem' : '0')};
  width: 100%;

  padding-bottom: 3rem;

  border-bottom: 1px solid ${PALETTE.BLACK};

  font-size: 3.5rem;
  color: ${PALETTE.BLACK};

  transition: all 0.3s linear;

  word-break: break-word;
  overflow: hidden;
`;
