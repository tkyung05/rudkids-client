import { useRef } from 'react';

import { useGetCommunityList } from '@/hooks/@queries/community';
import useObserver from '@/hooks/useObserver';

import Loading from '@/components/@common/Loading';

import { STATUS_TYPE } from '@/constants/api';

import MagazineListView from './MagazineList.view';

function MagazineList() {
  const { data: magazineListData, status, fetchNextPage } = useGetCommunityList('MAGAZINE');

  const scrollPoint = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useObserver(scrollPoint, onIntersect);

  return (
    <>
      {/* {status === STATUS_TYPE.LOADING && <Loading />} */}

      {status === STATUS_TYPE.SUCCESS && magazineListData?.pages && (
        <MagazineListView magazineList={magazineListData.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default MagazineList;
