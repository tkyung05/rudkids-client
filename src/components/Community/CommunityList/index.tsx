import { useRef } from 'react';

import { useGetCommunityList } from '@/hooks/@queries/community';
import useObserver from '@/hooks/useObserver';

import Loading from '@/components/@common/Loading';

import { STATUS_TYPE } from '@/constants/api';

import CommunityListView from './CommunityList.view';

function CommunityList() {
  const { data: communityListdata, status, fetchNextPage } = useGetCommunityList('POST');

  const scrollPoint = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useObserver(scrollPoint, onIntersect);

  return (
    <>
      {/* {status === STATUS_TYPE.LOADING && <Loading />} */}

      {status === STATUS_TYPE.SUCCESS && communityListdata?.pages && (
        <CommunityListView communityList={communityListdata.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default CommunityList;
