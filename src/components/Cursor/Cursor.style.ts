import Image from 'next/image';
import styled from 'styled-components';

export const Cursor = styled(Image)`
  pointer-events: none;
  position: fixed;

  width: 80px;
  height: auto;
  z-index: 1000;
`;
