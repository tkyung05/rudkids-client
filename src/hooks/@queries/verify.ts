import { useMutation } from '@tanstack/react-query';

import { PATH } from '@/constants';
import { RESPONSE } from '@/constants/api';

import verifyApi from '@/api/verify';

import useAlert from '../useToast';

interface ValidateCodeRequestType {
  phoneNumber: string;
  code: string;
}

interface UseVerifyType {
  onSuccessSendPhoneNumber: () => void;
}

function useVerify({ onSuccessSendPhoneNumber }: UseVerifyType) {
  const { onToast } = useAlert();

  const { mutate: sendPhoneNumber } = useMutation({
    mutationFn: (phoneNumber: string) => verifyApi.sendPhoneNumber(phoneNumber),
    onSuccess: (res) => {
      if (res.status === RESPONSE.STATUS.OK) {
        onToast('success', '인증코드를 발송했습니다!');
        onSuccessSendPhoneNumber();
      }
    },
    onError: (res: any) => {
      if (res?.response?.status === 400) {
        onToast('error', '이미 등록된 전화번호 입니다!');
      }
    },
  });

  const { mutate: validateCode } = useMutation({
    mutationFn: (value: ValidateCodeRequestType) =>
      verifyApi.validateCode(value.phoneNumber, value.code),
    onSuccess: (res) => {
      if (res?.status === RESPONSE.STATUS.OK) {
        location.replace(PATH.MAIN);
      }
    },
    onError: (res: any) => {
      if (res?.response?.status === 409) {
        onToast('error', '인증코드를 다시 확인해주세요!');
      }
    },
  });

  return { sendPhoneNumber, validateCode };
}

export default useVerify;
