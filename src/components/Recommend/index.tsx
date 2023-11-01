import { useRef } from 'react';

import { useGetRecommendItemList } from '@/hooks/@queries/item';
import useObserver from '@/hooks/useObserver';

import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import Loading from '../@common/Loading';
import RecommendItemListView from './Recommend.view';

function RecommendItemList() {
  const { data: recommendItemListData, status, fetchNextPage } = useGetRecommendItemList();

  const scrollPoint = useRef(null);
  useObserver(
    scrollPoint,
    ([entry]: IntersectionObserverEntry[]) => entry.isIntersecting && fetchNextPage()
  );

  return (
    <>
      {(status === STATUS_TYPE.LOADING || status === STATUS_TYPE.ERROR) && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && recommendItemListData && (
        <RecommendItemListView recommendItemListData={recommendItemListData.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default RecommendItemList;
