import Image from 'next/image';
import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - ${HEADER_HEIGHT});

  padding: calc(${HEADER_HEIGHT} + 20rem) 0 40rem 0;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 130rem;

  margin-top: 7.5rem;
`;

export const UserFieldName = styled.div`
  width: 70%;
  margin: 2.5rem 0;

  font-size: 4.5rem;
  color: ${PALETTE.RED_2};
`;

export const UserFieldInput = styled.input`
  width: 70%;
  height: 12rem;

  padding-left: 4rem;

  border-radius: 10rem;

  font-size: 5rem;
  color: ${PALETTE.BLACK};

  &:disabled {
    color: ${PALETTE.GRAY_2};
  }

  background-color: ${PALETTE.WHITE};
`;

export const Button = styled.button`
  width: 100%;
  height: 12rem;

  margin-top: 8rem;

  border-radius: 12rem;

  font-size: 4.5rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLUE};
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 12rem;

  margin-top: 8rem;

  border-radius: 12rem;

  font-size: 4.5rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.GRAY_3};
`;

export const LogOutButton = styled.button`
  margin-top: 15rem;

  font-size: 7rem;

  color: ${PALETTE.RED};

  transition: border-bottom 0.1s linear;
  &:hover {
    border-bottom: 3px solid ${PALETTE.RED};
  }
`;

export const ProfilePreviewImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const ProfileUploadButton = styled.div`
  width: 40rem;
  height: 40rem;

  border-radius: 50%;

  overflow: hidden;
`;

export const ErrorText = styled.p`
  text-align: end;
  width: 70%;
  font-size: 3.5rem;

  color: ${PALETTE.RED};

  margin-top: 2rem;
`;

export const ButtonBundle = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;

  margin-top: 8rem;
`;
