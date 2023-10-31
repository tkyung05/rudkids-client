import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { usePostDeliveryInfo } from '@/hooks/@queries/delivery';

import { DeliveryInformationType } from '@/@types/delivery';

import AddressSearchWidget from '@/components/@common/AddressSearchWidget';

import { validOnlyNumber } from '@/utils/validation';

import * as S from './PostDeliveryInfo.style';

interface PostDeliveryInfoPropsType {
  handleCloseModal: () => void;
}

function PostDeliveryInfo(props: PostDeliveryInfoPropsType) {
  const { mutate: postDeliveryInfo } = usePostDeliveryInfo(props.handleCloseModal);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryInformationType>({ defaultValues: { isBasic: false } });

  const [isOnAddressSearchBox, setIsOnAddressSearchBox] = useState(false);

  const onCompleteSearchAddress = (zipCode: string, address: string) => {
    setValue('address', address);
    setValue('zipCode', zipCode);

    setIsOnAddressSearchBox(false);
  };

  const onValid = (payload: DeliveryInformationType) => {
    postDeliveryInfo(payload);
  };

  const onInValid = () => {
    console.log(errors);
  };

  return (
    <S.Container>
      {isOnAddressSearchBox && (
        <S.AddressSearchWidgetContainer>
          <AddressSearchWidget onCompleteSearchAddress={onCompleteSearchAddress} />
        </S.AddressSearchWidgetContainer>
      )}

      {isOnAddressSearchBox === false && (
        <S.DeliveryInfoForm onSubmit={handleSubmit(onValid, onInValid)}>
          <S.DeliveryInfoBox>
            <S.DeliveryInputBundle>
              <S.FieldName>받는사람</S.FieldName>
              <S.Input
                {...register('receiverName', {
                  required: { value: true, message: '받는사람의 이름을 입력해주세요!' },
                })}
                placeholder="ex) 철수"
              />
            </S.DeliveryInputBundle>

            <ErrorMessage
              errors={errors}
              name="receiverName"
              render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
            />
          </S.DeliveryInfoBox>

          <S.DeliveryInfoBox>
            <S.DeliveryInputBundle>
              <S.FieldName>연락처</S.FieldName>
              <S.Input
                type="text"
                {...register('receiverPhone', {
                  required: { value: true, message: '전화번호를 입력하라' },
                  minLength: { value: 11, message: '전화번호 11자를 입력하라' },
                  maxLength: { value: 11, message: '전화번호 11자를 입력하라' },
                })}
                placeholder="ex) 01077777777"
                onInput={validOnlyNumber}
              />
            </S.DeliveryInputBundle>

            <ErrorMessage
              errors={errors}
              name="receiverPhone"
              render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
            />
          </S.DeliveryInfoBox>

          <S.AddressBundle onClick={() => setIsOnAddressSearchBox(true)}>
            <S.DeliveryInfoBox>
              <S.DeliveryInputBundle>
                <S.FieldName>우편번호</S.FieldName>
                <S.Input
                  type="text"
                  {...register('zipCode', {
                    required: { value: true, message: '우편번호를 입력해주세요!' },
                  })}
                  disabled
                />
              </S.DeliveryInputBundle>

              <ErrorMessage
                errors={errors}
                name="zipCode"
                render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
              />
            </S.DeliveryInfoBox>
            <S.DeliveryInfoBox>
              <S.DeliveryInputBundle>
                <S.FieldName>배송주소</S.FieldName>
                <S.Input
                  type="text"
                  {...register('address', {
                    required: { value: true, message: '배송주소를 입력해주세요!' },
                  })}
                  disabled
                />
              </S.DeliveryInputBundle>

              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
              />
            </S.DeliveryInfoBox>
          </S.AddressBundle>

          <S.DeliveryInfoBox>
            <S.DeliveryInputBundle>
              <S.FieldName>상세주소</S.FieldName>
              <S.Input
                type="text"
                {...register('extraAddress', {
                  required: { value: true, message: '상세주소를 입력해주세요!' },
                })}
                placeholder="ex) 문 앞"
              />
            </S.DeliveryInputBundle>

            <ErrorMessage
              errors={errors}
              name="extraAddress"
              render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
            />
          </S.DeliveryInfoBox>

          <S.DeliveryInfoBox>
            <S.DeliveryInputBundle>
              <S.FieldName>요청사항</S.FieldName>
              <S.Input
                type="text"
                {...register('message', {
                  required: { value: true, message: '요청사항을 입력해주세요!' },
                })}
                placeholder="ex) 도착하면 연락해주세요"
              />
            </S.DeliveryInputBundle>

            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
            />
          </S.DeliveryInfoBox>

          <S.DeliveryInputBundle htmlFor="is-basic-checkbox">
            <S.CheckInput id="is-basic-checkbox" type="checkbox" {...register('isBasic')} />
            <S.FieldName>기본배송지</S.FieldName>
          </S.DeliveryInputBundle>

          <S.PostDeliveryInfoButton>저장</S.PostDeliveryInfoButton>
        </S.DeliveryInfoForm>
      )}
    </S.Container>
  );
}

export default PostDeliveryInfo;
