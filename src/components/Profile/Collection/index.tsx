import Link from 'next/link';
import { useState } from 'react';

import { useGetCollection } from '@/hooks/@queries/collection';

import Loading from '@/components/@common/Loading';

import { PATH, QUERY_KEY } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import { getDefaultToQueryKeyText } from '@/utils/validation';

import * as S from './Collection.style';
import ItemElement from './ItemElement';

const CATEGORY = ['All', 'Toy', 'Sticker', 'Poster', 'Mystery'];

function Collection() {
  const [categoryName, setCategoryName] = useState(CATEGORY[0]);
  const [categorySelect, setCategorySelect] = useState(
    Array.from({ length: CATEGORY.length }, (_, idx) => {
      if (idx === 0) return true;
      else return false;
    })
  );
  const { data: collectionList, status } = useGetCollection(categoryName);

  const handleClickCategoryButton = (categoryName: string, idx: number) => {
    setCategoryName(categoryName);

    setCategorySelect(
      Array.from({ length: CATEGORY.length }, (_, newCategoryIdx) => {
        if (newCategoryIdx === idx) return true;
        else return false;
      })
    );
  };

  return (
    <>
      <S.ButtonContainer>
        {CATEGORY.map((categoryName, idx) => (
          <S.CategoryButton
            isClick={categorySelect[idx]}
            onClick={() => handleClickCategoryButton(categoryName, idx)}
            key={categoryName}
          >
            {categoryName}
          </S.CategoryButton>
        ))}
      </S.ButtonContainer>

      {status === STATUS_TYPE.LOADING && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && (
        <S.Container>
          <S.ListContainer>
            {collectionList?.map((collection, idx) => {
              return (
                <Link
                  href={
                    collection.itemName === '?'
                      ? location.href
                      : {
                          pathname: PATH.ITEM_DETAIL,
                          query: {
                            [QUERY_KEY.ITEM_NAME]: getDefaultToQueryKeyText(collection.itemName),
                          },
                        }
                  }
                  key={idx}
                >
                  <ItemElement {...collection} />
                </Link>
              );
            })}
          </S.ListContainer>
        </S.Container>
      )}
    </>
  );
}

export default Collection;
