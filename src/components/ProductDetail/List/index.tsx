import Link from 'next/link';

import { ProductDetailType } from '@/@types/product';

import { PATH, QUERY_KEY } from '@/constants';

import { getDefaultToQueryKeyText } from '@/utils/validation';

import ItemElement from '../ItemElement';
import * as S from './List.style';

function List(props: { itemsList: ProductDetailType[] }) {
  return (
    <S.ListContainer>
      {props.itemsList.map((items) =>
        items.items.content.map((item) => {
          return (
            <Link
              href={{
                pathname: PATH.ITEM_DETAIL,
                query: { [QUERY_KEY.ITEM_NAME]: getDefaultToQueryKeyText(item.name) },
              }}
              key={item.itemId}
            >
              <ItemElement
                itemImage={item.imageUrl}
                alt={item.name}
                itemName={item.name}
                itemPrice={item.price}
              />
            </Link>
          );
        })
      )}
    </S.ListContainer>
  );
}

export default List;
