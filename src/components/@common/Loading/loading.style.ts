/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: ${({ bgColor }) => bgColor};
`;
