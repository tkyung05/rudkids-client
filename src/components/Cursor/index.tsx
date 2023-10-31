import { CSSProperties } from 'styled-components';

import * as S from './Cursor.style';

interface CursorPropsType {
  src: any;
  style: CSSProperties;
}

function Cursor({ src, style }: CursorPropsType) {
  return <S.Cursor src={src} alt="커스텀 커서" style={style} />;
}

export default Cursor;
