import styled from 'styled-components';

import { PALETTE, RESPONSIVE } from '@/constants/style';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;

  margin-top: 20rem;
  padding: 5rem 0;

  border-radius: 4rem;

  background-color: ${PALETTE.BLUE};

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    width: 60%;
  }
  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 80%;
  }
`;

export const RefundInfoBox = styled.div<{ isOnDisplay: boolean }>`
  display: ${(p) => (p.isOnDisplay ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  width: 70%;

  margin: 2rem 0;
`;

export const RefundInputBundle = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  margin: 1rem 0;
`;

export const FieldName = styled.div`
  width: 20%;

  margin: 0 0 3rem 0;

  font-size: 5.5rem;
  white-space: nowrap;

  color: ${PALETTE.WHITE};

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 30%;
  }
`;

export const Input = styled.input`
  width: 60%;

  height: 9rem;

  padding-left: 4rem;

  border-radius: 2rem;

  font-size: 4.5rem;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const BioInput = styled.textarea`
  width: 85%;
  height: 20rem;

  margin: 2rem 0 5rem 0;
  padding: 2.5rem;

  border-radius: 4rem;

  font-size: 4rem;

  background-color: ${PALETTE.YELLOW_LIGHT};

  resize: none;
  border: none;
  outline: none;
`;

export const RefundButton = styled.button`
  width: 65%;

  margin: 4rem 0 2rem 0;
  padding: 3rem 0;

  border-radius: 4rem;

  font-size: 4.5rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLACK};
`;

export const ErrorText = styled.p`
  margin-top: 1rem;

  font-size: 3.5rem;

  color: ${PALETTE.BLACK};
`;

export const RefundAccountTitle = styled.div`
  margin-bottom: 7rem;
  padding: 3rem 10rem;

  border-radius: 50%;

  font-weight: bold;
  font-size: 6rem;
  white-space: nowrap;

  color: ${PALETTE.WHITE};
  background-color: ${PALETTE.RED};
`;

export const BankSelectorContainer = styled.div`
  width: 40%;

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    width: 60%;
  }
`;
