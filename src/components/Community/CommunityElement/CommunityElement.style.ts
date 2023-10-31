import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 55rem;
  width: 50rem;

  border: 1px solid ${PALETTE.BLACK};
  background-color: ${PALETTE.WHITE};
`;

export const ThumbNailBox = styled.div`
  overflow: hidden;

  width: 80%;
  height: 30rem;

  margin: 5rem;

  border: 1px solid ${PALETTE.BLACK};
`;

export const ThumbNail = styled(Image)`
  width: 100%;
  height: auto;
`;

export const Title = styled.p`
  margin: 2rem;

  font-size: 5rem;

  color: ${PALETTE.BLACK};
`;
