import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

import { useRefundOrder } from '@/hooks/@queries/order';

import * as S from './RefundForm.style';

interface RefundFormPropsType {
  orderId: string;
  onSuccessRefund: () => void;
}

interface RefundFormType {
  cancelReason: string;
}

function RefundForm(props: RefundFormPropsType) {
  const { mutate: refund } = useRefundOrder(props.onSuccessRefund);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RefundFormType>();

  const onValid = (payload: RefundFormType) => {
    refund({ orderId: props.orderId, cancelReason: payload.cancelReason });
  };

  return (
    <S.Container onSubmit={handleSubmit(onValid)}>
      <S.RefundInfoBox isOnDisplay={true}>
        <S.RefundInputBundle style={{ flexDirection: 'column' }}>
          <S.FieldName>취소 사유</S.FieldName>
          <S.BioInput
            {...register('cancelReason', {
              required: { value: true, message: '취소 사유를 입력해주세요!' },
            })}
            placeholder="ex) 이거 재미없어서 환불 하겠습니다."
          />
        </S.RefundInputBundle>

        <ErrorMessage
          errors={errors}
          name="cancelReason"
          render={({ message }) => <S.ErrorText>{message}</S.ErrorText>}
        />
      </S.RefundInfoBox>

      <S.RefundButton>확인</S.RefundButton>
    </S.Container>
  );
}

export default RefundForm;
