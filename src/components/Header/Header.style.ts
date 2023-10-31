import Image from 'next/image';
import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const HEADER_HEIGHT = '12.5rem';

export const Header = styled.header`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;

  width: 100vw;
  height: ${HEADER_HEIGHT};

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const WebNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 95%;
  height: 100%;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  z-index: 900;

  position: absolute;
  bottom: -5rem;
  left: 0%;

  display: flex;
  justify-content: center;

  width: 100%;
`;

export const Logo = styled(Image)`
  width: 50rem;
  height: auto;
`;

export const NavButton = styled.div`
  padding: 2.5rem 5rem;

  font-size: 4rem;

  color: ${PALETTE.BLACK};
  background-color: transparent;

  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    color: ${PALETTE.RED_2};
  }

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    text-align: center;
    width: 100%;

    padding: 5rem 0;

    font-size: 5rem;
  }
`;

export const WebNavButtonContainer = styled.div`
  z-index: 990;

  display: flex;
  align-items: center;
`;

export const MobileNav = styled.nav`
  display: none;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 95%;
    height: 100%;
  }
`;

export const MenuButton = styled.div`
  position: relative;
  z-index: 990;

  font-size: 5rem;

  color: ${PALETTE.BLACK};
  background-color: transparent;

  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    color: ${PALETTE.RED_2};
  }
`;

export const MobileMenuBox = styled.div<{ isOnMenuBar: boolean }>`
  z-index: 899;
  position: fixed;
  top: ${({ isOnMenuBar }) => (isOnMenuBar ? '0' : '-100%')};
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100vw;

  padding-top: calc(${HEADER_HEIGHT} + 10rem);

  background-color: ${PALETTE.YELLOW_LIGHT};

  transition: top 0.35s linear;
`;
