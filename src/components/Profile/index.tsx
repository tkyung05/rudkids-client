import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useGetUser } from '@/hooks/@queries/user';

import { PATH } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';

import Loading from '../@common/Loading';
import CanceledOrderList from './CanceledOrderList';
import Collection from './Collection';
import OrderList from './OrderList';
import * as S from './Profile.style';

export const TAB_MENU_KEY = {
  COLLECTION: 'my collection',
  ORDER_LIST: 'orders',
  CANCELED_ORDER_LIST: 'canceled orders',
};

function Profile() {
  const { push } = useRouter();
  const tabMenu = getSearchParam('tab');

  const { data: user, status } = useGetUser();

  useEffect(() => {
    if (tabMenu === null) {
      handleClickTabMenuButton(TAB_MENU_KEY.COLLECTION);
    }
  }, []);

  const handleClickTabMenuButton = (tabMenuKey: string) => {
    push(PATH.PROFILE + `?tab=${tabMenuKey}`);
  };

  return (
    <>
      {status === STATUS_TYPE.LOADING && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && user && (
        <S.Container>
          <S.ProfileContainer>
            <S.ProfileImageFrame>
              <S.ProfilePreviewImage
                src={user.profileImage.url}
                alt="사용자 프로필 사진 미리보기"
                width={1000}
                height={1000}
              />
            </S.ProfileImageFrame>

            <S.UserInfoContainer>
              <S.Name>{user.name}</S.Name>
              <div style={{ display: 'flex' }}>
                <S.UserInfoText>collection {user.boughtCollectionItemCount}</S.UserInfoText>
                <S.UserInfoText>ordering {user.deliveringOrderCount}</S.UserInfoText>
              </div>
              <S.EditButton onClick={() => push(PATH.PROFILE_EDIT)}>profile edit</S.EditButton>
            </S.UserInfoContainer>
          </S.ProfileContainer>

          <S.ContentsTabBar>
            <S.ContentTagBox
              onClick={() => handleClickTabMenuButton(TAB_MENU_KEY.COLLECTION)}
              isSelected={tabMenu === TAB_MENU_KEY.COLLECTION}
            >
              {TAB_MENU_KEY.COLLECTION}
            </S.ContentTagBox>

            <S.ContentTagBox
              onClick={() => handleClickTabMenuButton(TAB_MENU_KEY.ORDER_LIST)}
              isSelected={tabMenu === TAB_MENU_KEY.ORDER_LIST}
            >
              {TAB_MENU_KEY.ORDER_LIST}
            </S.ContentTagBox>

            <S.ContentTagBox
              onClick={() => handleClickTabMenuButton(TAB_MENU_KEY.CANCELED_ORDER_LIST)}
              isSelected={tabMenu === TAB_MENU_KEY.CANCELED_ORDER_LIST}
            >
              {TAB_MENU_KEY.CANCELED_ORDER_LIST}
            </S.ContentTagBox>
          </S.ContentsTabBar>

          {tabMenu === TAB_MENU_KEY.COLLECTION && <Collection />}

          {tabMenu === TAB_MENU_KEY.ORDER_LIST && <OrderList />}

          {tabMenu === TAB_MENU_KEY.CANCELED_ORDER_LIST && <CanceledOrderList />}
        </S.Container>
      )}
    </>
  );
}

export default Profile;
