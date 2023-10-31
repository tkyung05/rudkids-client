import styled from 'styled-components';

import { FONT, PALETTE } from '@/constants/style';

export const Container = styled.button<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(p) => `${p.size * 3.5}rem`};
  height: ${(p) => `${p.size}rem`};

  border-radius: ${(p) => `${p.size / 4}rem`};

  font-size: ${(p) => `${p.size * 0.5}rem`};

  background: ${PALETTE.RED};
  color: ${PALETTE.YELLOW};
`;
