import { PATH } from '@/constants';

import * as S from './Footer.style';

function Footer() {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.ContentText isTitle>Service</S.ContentText>
        <S.ContentText isTitle={false}>
          Information
          <S.InformationBox className="information-box">
            상호명: 루키즈 / 대표자명: 이규진
            <br />
            사업자등록번호: 717-09-02356
            <br />
            통신판매업신고번호: 2023-부산기장-0498
            <br />
            사업장주소: 부산광역시 기장군 기장읍 차성로441번길 7, 2동 1209호(태영아파트)
            <br />
            전화: 0507-0178-0592
            <br />
            이메일: rudkids2023@gmail.com
          </S.InformationBox>
        </S.ContentText>
      </S.ContentContainer>

      <S.ContentContainer>
        <S.ContentText isTitle>Help</S.ContentText>
        <S.ContentText
          isTitle={false}
          onClick={() => location.replace(PATH.CLIENT_URL + '/policy/termsOfUse')}
        >
          Terms of Use
        </S.ContentText>

        <S.ContentText
          isTitle={false}
          onClick={() => location.replace(PATH.CLIENT_URL + '/policy/privacy')}
        >
          Privacy Policy
        </S.ContentText>

        <S.ContentText
          isTitle={false}
          onClick={() => location.replace(PATH.CLIENT_URL + '/policy/faq')}
        >
          FAQ
        </S.ContentText>
      </S.ContentContainer>

      <S.ContentContainer>
        <S.ContentText isTitle>Social</S.ContentText>

        <S.ContentText
          isTitle={false}
          onClick={() => window.open('https://www.instagram.com/rudkidss/')}
        >
          Instargram
        </S.ContentText>
        <S.ContentText isTitle={false}>Kakao</S.ContentText>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Footer;
