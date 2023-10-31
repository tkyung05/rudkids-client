import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

import { HEADER_HEIGHT } from '../../Header/Header.style';

export const AuthContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT});

  background-color: ${PALETTE.YELLOW_LIGHT};

  padding-top: ${HEADER_HEIGHT};

  overflow: hidden;
`;

export const OAuthIcon = styled(Image)`
  position: absolute;
  top: 10px;
  left: 10px;

  width: 33px;
  height: auto;

  transition: left 0.35s linear;
`;

export const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;

  width: 450px;
  height: 300px;

  margin-top: 100px;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 320px;
  }
`;

export const LoginText = styled.p`
  color: ${PALETTE.RED};

  font-weight: bold;
  font-size: 9.5rem;
`;

export const OAuthBundle = styled.div`
  margin-top: 5rem;

  width: 70%;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 85%;
  }
`;

export const OAuthButton = styled.button<{ bgColor: string; fontColor: string }>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  margin-bottom: 30px;
  padding: 10px;

  border-radius: 50px;

  font-size: 16px;

  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.fontColor};

  transition: all 0.15s linear;

  &:hover {
    img {
      left: calc(100% - 43px);
    }

    background-color: ${(p) => p.fontColor};
    color: ${({ bgColor }) => bgColor};
  }
`;

export const OAuthButtonImg = styled(Image)`
  height: 20rem;
  width: auto;
`;
