import { useRef } from 'react';

import { useGetMysteryDetail } from '@/hooks/@queries/mystery';
import useObserver from '@/hooks/useObserver';

import Loading from '@/components/@common/Loading';

import { QUERY_KEY } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';

import MysteryDetailView from './MysteryDetail.view';

function MysteryDetail() {
  const mysteryId = getSearchParam(QUERY_KEY.MYSTERY_ID);
  const { data: mysteryDetailData, status, fetchNextPage } = useGetMysteryDetail(mysteryId);

  const scrollPoint = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useObserver(scrollPoint, onIntersect);

  return (
    <>
      {status === STATUS_TYPE.LOADING && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && mysteryDetailData && (
        <MysteryDetailView mysteryDetailData={mysteryDetailData.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default MysteryDetail;
