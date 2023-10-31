import DESK_MESSAGE_BOX from '@/assets/png/about/desktop_message.png';
import MOBILE_MESSAGE_BOX from '@/assets/png/about/mobile_message.png';
import { useEffect, useState } from 'react';

import useGetWindowSize from '@/hooks/useGetWindowSize';

import { RESPONSIVE } from '@/constants/style';

import * as S from './MessageBox.style';

export interface MessageBoxPropsType {
  questionText: string;
  answerElement: JSX.Element;
}

function MessageBox(props: MessageBoxPropsType) {
  const { curWidth } = useGetWindowSize();
  const [messageBoxImgUrl, setMessageBoxImgUrl] = useState(MOBILE_MESSAGE_BOX.src);

  useEffect(() => {
    setMessageBoxImgUrl(
      curWidth <= parseInt(RESPONSIVE.TABLET.MAX_WIDTH)
        ? MOBILE_MESSAGE_BOX.src
        : DESK_MESSAGE_BOX.src
    );
  }, [curWidth]);

  return (
    <>
      <S.MessageBox>
        <S.MessageBoxImage src={messageBoxImgUrl} alt="메시지 박스" width={1000} height={1000} />
        <S.QuestionText>{props.questionText}</S.QuestionText>
      </S.MessageBox>

      {props.answerElement}
    </>
  );
}

export default MessageBox;
