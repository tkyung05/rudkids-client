import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 80rem;

  margin-top: 3rem;
`;

export const DeliveryInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 5rem 0;
`;

export const AddressSearchWidgetContainer = styled.div`
  width: 85%;
  height: 60%;

  padding: 7rem 0;
`;

export const AddressBundle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  &,
  * {
    cursor: pointer;
  }
`;

export const DeliveryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 70%;

  margin: 3rem 0;
`;

export const DeliveryInputBundle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin: 1rem 0;
`;

export const FieldName = styled.div`
  width: 30%;

  font-size: 5rem;
  white-space: nowrap;
`;

export const Input = styled.input`
  width: 70%;

  height: 9rem;

  padding-left: 3rem;
  margin-left: 2rem;

  border-radius: 9rem;
  border: 1.5px solid ${PALETTE.BLACK};

  font-size: 4rem;

  background-color: ${PALETTE.YELLOW_LIGHT};
`;

export const PostDeliveryInfoButton = styled.button`
  width: 80%;

  margin: 10rem 0;
  padding: 3rem;

  border-radius: 7.5rem;

  font-size: 4.5rem;

  color: ${PALETTE.YELLOW_LIGHT};
  background-color: ${PALETTE.BLUE};
`;

export const CheckInput = styled.input`
  width: 8rem;
  height: 8rem;

  margin: 4rem;

  border-radius: 8rem;
  border: 1.5px solid black;

  &:checked {
    background-color: ${PALETTE.BLUE};
  }

  appearance: none;
`;

export const ErrorText = styled.p`
  font-size: 3.5rem;

  color: ${PALETTE.RED};
`;
