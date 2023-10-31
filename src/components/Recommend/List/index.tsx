import Link from 'next/link';

import { ItemListType } from '@/@types/item';

import { PATH, QUERY_KEY } from '@/constants';

import { getDefaultToQueryKeyText } from '@/utils/validation';

import ItemElement from '../ItemElement';
import * as S from './List.style';

function List(props: { itemsList: ItemListType[] }) {
  return (
    <S.ListContainer>
      {props.itemsList.map((items) =>
        items.content.map((item, ordering) => {
          return (
            <Link
              href={{
                pathname: PATH.ITEM_DETAIL,
                query: { [QUERY_KEY.ITEM_NAME]: getDefaultToQueryKeyText(item.name) },
              }}
              key={item.itemId}
            >
              <ItemElement
                itemId={item.itemId}
                itemImage={item.imageUrl}
                alt={item.name}
                itemName={item.name}
                itemPrice={item.price}
                itemStatus={item.itemStatus}
                ordering={ordering}
              />
            </Link>
          );
        })
      )}
    </S.ListContainer>
  );
}

export default List;
