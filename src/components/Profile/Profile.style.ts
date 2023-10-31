import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

import { HEADER_HEIGHT } from '../Header/Header.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: calc(100vh - ${HEADER_HEIGHT});

  padding: calc(${HEADER_HEIGHT} + 20rem) 0 40rem 0;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ProfileContainer = styled.div`
  display: flex;

  width: 60%;

  padding-bottom: 10rem;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 100%;
    justify-content: center;
  }
`;

export const ProfileImageFrame = styled.div`
  width: 40rem;
  height: 40rem;

  margin-right: 15rem;

  border-radius: 50%;

  overflow: hidden;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 35rem;
    height: 35rem;
  }
`;

export const ProfilePreviewImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  padding: 2rem 6rem;

  border-radius: 6rem;

  font-size: 4rem;
  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLUE};
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 7rem;
  color: ${PALETTE.RED};
`;

export const UserInfoText = styled.div`
  padding-right: 3rem;

  font-family: ${FONT.NOTO_SANS};
  font-size: 4rem;
  color: ${PALETTE.BLACK};
`;

export const ContentsTabBar = styled.div`
  display: flex;
  justify-content: center;

  width: 60%;

  border-top: 2px solid ${PALETTE.GRAY_2};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 70%;
  }
`;

export const ContentTagBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 5rem;
  padding-top: 2rem;

  border-top: ${(p) => (p.isSelected ? `2px solid ${PALETTE.BLUE}` : '2px solid transparent')};

  font-size: 4rem;
  color: ${PALETTE.BLACK};

  font-family: ${FONT.NOTO_SANS};
`;
