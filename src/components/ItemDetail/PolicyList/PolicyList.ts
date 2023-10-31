import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const PolicyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 85%;

  margin-top: 15rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 100%;
  }
`;

export const PolicyButton = styled.div`
  display: flex;
  align-items: center;

  margin: 1.5rem;

  &:hover {
    div {
      background-color: ${PALETTE.RED_2};
    }
  }
`;

export const PolicyCheckBox = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  background-color: ${PALETTE.BLACK};
`;

export const PolicyTitle = styled.p`
  padding-left: 2rem;

  font-size: 4.5rem;

  color: ${PALETTE.BLACK};
`;

export const PolicyContent = styled.div`
  margin-left: 5rem;

  font-size: 4rem;
  color: ${PALETTE.BLACK};
`;
