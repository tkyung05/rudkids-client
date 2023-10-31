import { ItemListType } from '@/@types/item';

import List from './List';
import * as S from './Recommend.style';

function RecommendItemListView(props: { recommendItemListData: ItemListType[] }) {
  return (
    <S.Container>
      <List itemsList={props.recommendItemListData} />
    </S.Container>
  );
}

export default RecommendItemListView;
