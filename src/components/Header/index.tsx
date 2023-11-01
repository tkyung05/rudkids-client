import RUDKIDS_LOGO from '@/assets/svg/rudkids_logo.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useAlert from '@/hooks/useToast';

import { PATH } from '@/constants';

import { getAccessToken } from '@/utils';

import BuyButton from '../@common/BuyButton';
import * as S from './Header.style';

function Header() {
  const { push } = useRouter();
  const { onToast } = useAlert();

  const [isAccessibleUser, setIsAccessibleUser] = useState(false);

  const [isOnMenuBar, setIsOnMenuBar] = useState(false);

  useEffect(() => setIsAccessibleUser(!!getAccessToken()), [isAccessibleUser]);

  const handleClickNavButton = (path: string) => {
    setIsOnMenuBar(false);
    push(path);
  };

  return (
    <S.Header>
      <S.WebNav>
        <S.WebNavButtonContainer>
          <S.NavButton onClick={() => handleClickNavButton(PATH.ABOUT)}>About</S.NavButton>
          <S.NavButton onClick={() => handleClickNavButton(PATH.VIDEO_LIST)}>Video</S.NavButton>
          <S.NavButton
            onClick={() => {
              onToast('info', 'Coming soon!');
              // handleClickNavButton(PATH.COMMUNITY);
            }}
          >
            Community
          </S.NavButton>
          <S.NavButton onClick={() => handleClickNavButton(PATH.SHOP)}>Shop</S.NavButton>
        </S.WebNavButtonContainer>

        <S.LogoContainer>
          <S.Logo
            priority
            alt="루키즈 로고"
            src={RUDKIDS_LOGO}
            onClick={() => handleClickNavButton(PATH.MAIN)}
            width={500}
            height={500}
          />
        </S.LogoContainer>

        <S.WebNavButtonContainer>
          {isAccessibleUser ? (
            <S.NavButton onClick={() => handleClickNavButton(PATH.PROFILE)}>My Profile</S.NavButton>
          ) : (
            <S.NavButton onClick={() => handleClickNavButton(PATH.AUTH)}>Account</S.NavButton>
          )}

          <S.NavButton onClick={() => handleClickNavButton(PATH.RECOMMEND)}>Hot</S.NavButton>

          <BuyButton size={7.5} handleClickButton={() => setIsOnMenuBar(false)} />
        </S.WebNavButtonContainer>
      </S.WebNav>

      <S.MobileNav>
        <S.MenuButton onClick={() => setIsOnMenuBar((s) => !s)}>
          {isOnMenuBar ? 'Close' : 'Menu'}
        </S.MenuButton>

        <S.MobileMenuBox isOnMenuBar={isOnMenuBar}>
          <S.NavButton onClick={() => handleClickNavButton(PATH.ABOUT)}>About</S.NavButton>
          <S.NavButton onClick={() => handleClickNavButton(PATH.VIDEO_LIST)}>Video</S.NavButton>
          <S.NavButton
            onClick={() => {
              onToast('info', 'Coming soon!');
              // handleClickNavButton(PATH.COMMUNITY);
            }}
          >
            Community
          </S.NavButton>
          <S.NavButton onClick={() => handleClickNavButton(PATH.SHOP)}>Shop</S.NavButton>

          {isAccessibleUser ? (
            <S.NavButton onClick={() => handleClickNavButton(PATH.PROFILE)}>My Profile</S.NavButton>
          ) : (
            <S.NavButton onClick={() => handleClickNavButton(PATH.AUTH)}>Account</S.NavButton>
          )}
          <S.NavButton onClick={() => handleClickNavButton(PATH.RECOMMEND)}>Hot</S.NavButton>
        </S.MobileMenuBox>

        <S.LogoContainer>
          <S.Logo
            priority
            alt="루키즈 로고"
            src={RUDKIDS_LOGO}
            onClick={() => handleClickNavButton(PATH.MAIN)}
            width={500}
            height={500}
          />
        </S.LogoContainer>

        <BuyButton
          size={7.5}
          style={{ position: 'relative', zIndex: '990' }}
          handleClickButton={() => setIsOnMenuBar(false)}
        />
      </S.MobileNav>
    </S.Header>
  );
}

export default Header;
