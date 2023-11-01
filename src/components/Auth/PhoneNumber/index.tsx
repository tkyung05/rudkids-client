import { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/@queries/login';
import useVerify from '@/hooks/@queries/verify';
import useInput from '@/hooks/useInput';
import useInterval from '@/hooks/useInterval';
import useAlert from '@/hooks/useToast';

import Loading from '@/components/@common/Loading';

import { PATH, QUERY_KEY } from '@/constants';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';
import { validOnlyNumber } from '@/utils/validation';

import * as S from './PhoneNumber.style';

function PhoneNumber() {
  const { onToast, onConfirm } = useAlert();

  const code = getSearchParam(QUERY_KEY.OAUTH_KEY);

  const [isLoading, setIsLoading] = useState(true);

  const { login } = useAuth({ onSuccessAuth: () => setIsLoading(false) });
  const { sendPhoneNumber, validateCode } = useVerify({
    onSuccessSendPhoneNumber: () => setIsDisablePhoneNumberElement(true),
  });

  const [time, setTime] = useState(180000);
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(60);
  const [timerText, setTimerText] = useState('0' + min + ':' + '00');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDisablePhoneNumberElement, setIsDisablePhoneNumberElement] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');

  const { handleChangeValue } = useInput();

  useEffect(() => {
    code && login(code);
  }, [code]);

  useEffect(() => {
    if (verifyCode.length === 6 && isDisablePhoneNumberElement) {
      validateCode({ phoneNumber, code: verifyCode });
    }
  }, [verifyCode]);

  useEffect(() => {
    time > 0 && onTimer();
    time === 0 && TimeOut();
  }, [time]);

  const handleClickSendPhoneNumberButton = (evet: any) => {
    evet.preventDefault();

    if (phoneNumber.length < 11) {
      return onToast('error', '전화번호 11자 모두 입력해주세요!');
    }

    sendPhoneNumber(phoneNumber);
  };

  useInterval(() => {
    if (time === 0) return;

    let newTime = time - 1000;
    let newMin = newTime / (60 * 1000);
    let newSec = sec;

    if (newSec > 0) {
      newSec = sec - 1;
      setTimerText('0' + Math.floor(newMin) + ':' + `${newSec < 10 ? '0' + newSec : newSec}`);
    }
    if (newSec === 0) {
      newSec = 60;
      setTimerText('0' + Math.floor(newMin) + ':' + '00');
    }

    setTime(newTime);
    setMin(newMin);
    setSec(newSec);
  }, 1000);

  const onTimer = () => {
    if (!isDisablePhoneNumberElement) {
      setTime(180000);
      setMin(3);
      setSec(60);
      setTimerText('03:00');
    }
  };

  const TimeOut = () => {
    setTimerText('00:00');

    onConfirm(
      '인증 시간이 만료 되었습니다 ㅜㅜ',
      '다시 시도하시겠습니까?',
      'YEAH',
      'YES',
      false,
      () => location.replace(PATH.AUTH)
    );
  };

  return (
    <>
      {isLoading && <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />}

      {!isLoading && (
        <S.Container>
          <S.ValidContainer>
            <S.Title>Phone ☎️</S.Title>

            <S.ValidForm>
              <S.FieldName>Phone Number</S.FieldName>

              <S.NumberInputContainer>
                <S.UserFieldInput
                  type="text"
                  placeholder="ex) 01077777777"
                  maxLength={11}
                  value={phoneNumber}
                  onInput={validOnlyNumber}
                  onChange={(e) => handleChangeValue(e, setPhoneNumber)}
                  widthSize="60%"
                />
                <S.NumberSendButton
                  onClick={(e) => handleClickSendPhoneNumberButton(e)}
                  disabled={isDisablePhoneNumberElement}
                >
                  {isDisablePhoneNumberElement ? 'sent 🙆‍♂️' : 'send'}
                </S.NumberSendButton>
              </S.NumberInputContainer>

              {isDisablePhoneNumberElement && (
                <>
                  <S.FieldName>Code</S.FieldName>
                  <S.NumberInputContainer>
                    <S.UserFieldInput
                      type="text"
                      placeholder="6 length..."
                      maxLength={6}
                      value={verifyCode}
                      onInput={validOnlyNumber}
                      onChange={(e) => handleChangeValue(e, setVerifyCode)}
                      widthSize="50%"
                    />
                    <S.AuthTimer>{timerText}</S.AuthTimer>
                  </S.NumberInputContainer>
                </>
              )}
            </S.ValidForm>
          </S.ValidContainer>
        </S.Container>
      )}
    </>
  );
}

export default PhoneNumber;
