import BG_IMG from '@/assets/png/about/background.jpg';
import Image from 'next/image';
import styled from 'styled-components';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const HomeIcon = styled(Image)`
  position: absolute;
  top: 10rem;
  left: 15rem;

  width: 12rem;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-image: url(${BG_IMG.src});

  background-size: cover;
  background-repeat: no-repeat;

  &,
  * {
    font-weight: bold;
    font-family: ${FONT.DOSS};
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200rem;

  padding-top: 35rem;

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 150rem;
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 90rem;
  }
`;

export const FriendshipProgreesBox = styled.div`
  position: relative;

  width: 100%;
`;

export const FriendshipBadge = styled(Image)`
  position: absolute;
  top: -8.5rem;
  left: -8.5rem;

  width: 35rem;
  height: auto;
`;

export const ProgressBar = styled.progress`
  position: absolute;
  top: 0;
  left: 15rem;

  appearance: none;

  width: 90%;
  height: 6rem;

  &::-webkit-progress-bar {
    border-radius: 2rem;
    background: ${PALETTE.WHITE};
  }

  &::-webkit-progress-value {
    border-radius: 2rem;
    background: #fc3540;

    transition: all 0.7s;
  }
`;

export const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;

  padding: 5rem 0;

  border-radius: 5rem;

  background-color: #faff2e;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
  }
`;

export const AnswerButton = styled.div`
  display: flex;
  align-items: center;

  margin: 0 4rem;
  padding: 3rem 5rem;

  border-radius: 2.5rem;
  border: 1.25rem solid ${PALETTE.BLACK};

  font-size: 5rem;

  background-color: ${PALETTE.WHITE};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    margin: 1rem 0 2rem 5rem;
    padding: 3rem;

    max-width: 80%;
  }
`;

export const StartBox = styled.div`
  position: relative;

  width: 60rem;

  margin-top: 20rem;
`;

export const KidImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const StartButton = styled(Image)`
  position: absolute;
  bottom: 35%;
  left: -20rem;

  width: 100rem;
  height: auto;
`;

export const NameText = styled.p`
  font-size: 5rem;
  color: ${PALETTE.BLACK};

  margin-left: 4rem;
`;

export const Input = styled.input`
  width: 23rem;

  margin: 4rem 1rem 2rem 4rem;
  padding: 2rem;

  border-radius: 2rem;
  border: 1.25rem solid ${PALETTE.BLACK};

  font-size: 5rem;

  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.WHITE};
`;

export const NextHelpText = styled.p`
  margin-top: 7rem;
  padding-bottom: 1rem;

  border-bottom: 0.7rem solid ${PALETTE.BLUE};

  font-size: 6rem;
  color: ${PALETTE.BLUE};
`;

export const NextButton = styled(Image)`
  width: 27rem;
  height: auto;

  margin-top: 7rem;
`;
