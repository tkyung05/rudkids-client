/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';

import { CommunityListType } from '@/@types/community';

import { PATH, QUERY_KEY } from '@/constants';

import MagazineElement from '../MagazineElement';
import * as S from './MagazineList.style';

function ListView(props: { magazineList: CommunityListType[] }) {
  return (
    <S.MagazineListContainer>
      {props.magazineList.map((magazineList) =>
        magazineList.content.map((magazine) => (
          <Link
            href={{
              pathname: PATH.MAGAZINE_DETAIL,
              query: { [QUERY_KEY.COMMUNITY_ID]: magazine.communityId },
            }}
          >
            <MagazineElement
              title={magazine.title}
              writer={magazine.writer}
              image={magazine.image}
              communityId={magazine.communityId}
            />
          </Link>
        ))
      )}
    </S.MagazineListContainer>
  );
}

export default ListView;
