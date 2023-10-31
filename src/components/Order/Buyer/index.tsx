import { useGetUser } from '@/hooks/@queries/user';

import { STATUS_TYPE } from '@/constants/api';

import { Title } from '../Order.style';
import * as S from './Buyer.style';

function Buyer() {
  const { data: user, status } = useGetUser();

  return (
    <>
      {status === STATUS_TYPE.SUCCESS && user && (
        <S.Container>
          <Title>★ 구매자 정보</Title>

          <S.Content>
            <S.FieldName>이름</S.FieldName> {user.name}
          </S.Content>
          <S.Content>
            <S.FieldName>이메일</S.FieldName> {user.email}
          </S.Content>
          <S.Content>
            <S.FieldName>휴대폰 번호</S.FieldName> {user.phoneNumber}
          </S.Content>
        </S.Container>
      )}
    </>
  );
}

export default Buyer;
