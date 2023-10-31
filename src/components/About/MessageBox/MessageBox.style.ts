import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const MessageBox = styled.div`
  position: relative;

  width: 90%;

  padding: 10rem 0 7rem 0;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 100%;

    padding: 20rem 0 10rem 0;
  }
`;

export const MessageBoxImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const QuestionText = styled.div`
  position: absolute;
  top: 57rem;
  left: 15rem;

  width: 80%;

  font-weight: bold;
  font-size: 5rem;

  color: ${PALETTE.BLACK};

  white-space: pre-wrap;
  line-height: 7rem;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    top: 70rem;
    left: 12.5rem;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    top: 60rem;
    left: 10rem;
  }
`;
