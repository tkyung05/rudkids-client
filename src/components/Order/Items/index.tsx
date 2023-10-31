import { useGetSelectedCartItemList } from '@/hooks/@queries/cart';

import { STATUS_TYPE } from '@/constants/api';

import { Title } from '../Order.style';
import * as S from './Items.style';

function Items() {
  const { data: selectedCartItemList, status } = useGetSelectedCartItemList();

  return (
    <>
      <Title>★ 상품목록</Title>

      {status === STATUS_TYPE.SUCCESS && selectedCartItemList && (
        <S.Container>
          {selectedCartItemList?.map((item) => (
            <S.ItemBox key={item.name}>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemAmount>{item.amount}개</S.ItemAmount>
            </S.ItemBox>
          ))}
        </S.Container>
      )}
    </>
  );
}

export default Items;
