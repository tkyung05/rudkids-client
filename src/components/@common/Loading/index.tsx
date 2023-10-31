import { ClipLoader } from 'react-spinners';

import * as S from './loading.style';

interface LoadingPropsType {
  circleColor: string;
  bgColor: string;
}

function Loading(props: LoadingPropsType) {
  return (
    <S.Container bgColor={props.bgColor}>
      <ClipLoader color={props.circleColor} size={30} />
    </S.Container>
  );
}

export default Loading;
