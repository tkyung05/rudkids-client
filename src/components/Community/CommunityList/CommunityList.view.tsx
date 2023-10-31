/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';

import { CommunityListType } from '@/@types/community';

import { PATH, QUERY_KEY } from '@/constants';

import CommunityElement from '../CommunityElement';
import * as S from './CommunityList.style';

function ListView(props: { communityList: CommunityListType[] }) {
  return (
    <S.CommunityListContainer>
      {props.communityList.map((communityList) =>
        communityList.content.map((community) => (
          <Link
            href={{
              pathname: PATH.COMMUNITY_DETAIL,
              query: { [QUERY_KEY.COMMUNITY_ID]: community.communityId },
            }}
          >
            <CommunityElement
              title={community.title}
              writer={community.writer}
              image={community.image}
              communityId={community.communityId}
            />
          </Link>
        ))
      )}
    </S.CommunityListContainer>
  );
}

export default ListView;
