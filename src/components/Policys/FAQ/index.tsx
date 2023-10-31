import { useState } from 'react';

import * as S from './FAQ.style';

function FAQ() {
  const [policyState, setPolicyState] = useState(Array.from({ length: 7 }, () => false));

  const handleClickPolicyBox = (key: number) => {
    const newPolicyState = [...policyState];
    newPolicyState[key] = !policyState[key];
    setPolicyState(newPolicyState);
  };

  return (
    <S.Container>
      <S.PolicyTitle>Rudkids FAQ</S.PolicyTitle>

      <S.PolicyContentContainer>
        <S.PolicyBox onClick={() => handleClickPolicyBox(0)}>고객센터</S.PolicyBox>
        <S.Content isDropDown={policyState[0]} height="30">
          <br /> - 10:00AM ~ 8:00PM(점심시간 : 12:00PM ~ 1:00PM) (주말, 공휴일 제외)
          <br /> - rudkids2023@gmail.com
          <br /> - 0507-0178-0592
        </S.Content>

        <S.PolicyBox onClick={() => handleClickPolicyBox(1)}>결제방법</S.PolicyBox>
        <S.Content isDropDown={policyState[1]} height="30">
          <br /> - 루키즈에서 지원하는 결제방법 외에 다른 결제 방법은 지원하지 않습니다.
        </S.Content>

        <S.PolicyBox onClick={() => handleClickPolicyBox(2)}>주문안내</S.PolicyBox>
        <S.Content isDropDown={policyState[2]} height="35">
          <br /> - 배송 기간은 결제 후 영업일 기준 3~5 일 소요됩니다.
          <br /> - 주문이 확인된 시간 기준 30분 이내로 주문취소를 하실 수 있습니다. 이 30분이 지나면
          저희 반품/교환 정책에 따라 제품을 반품하실 수 있습니다.
        </S.Content>

        <S.PolicyBox onClick={() => handleClickPolicyBox(3)}>배송안내</S.PolicyBox>
        <S.Content isDropDown={policyState[3]} height="35">
          <br /> - 루키즈의 모든 배송은 로젠택배사를 통해 발송됩니다.
          <br /> - 5만원 이상 구매시 무료배송입니다.
          <br /> - 제주 및 도서산간 지역은 추가 배송비가 부과될 수 있습니다.
        </S.Content>

        <S.PolicyBox onClick={() => handleClickPolicyBox(4)}>교환 및 반품 절차</S.PolicyBox>
        <S.Content isDropDown={policyState[4]} height="80">
          <br /> 1. 반품/교환 접수
          <br /> - 웹사이트 내 취소 페이지에서 e-mail을 통해 교환/반품 접수
          <br /> 2. 반품/교환 상품 상태
          <br /> - 단순 변심이라 판단되는 경우, 최초 배송 됐을 때의 상태 유지
          <br /> - 제품 교환이나 제품에 하자가 있는 경우 상품과 포장이 훼손되지 않아야 하며 반송할
          수 있는 포장 상태
          <br /> 3. 반품 상품 발송
          <br /> - 로젠택배 이용(착불) 1588-1255 또는 로젠택배 사이트를 통해 택배 반품 예약(2~3일
          이내 택배 기사님 방문 수거 예정)
        </S.Content>

        <S.PolicyBox onClick={() => handleClickPolicyBox(5)}>교환 및 반품 규정</S.PolicyBox>
        <S.Content isDropDown={policyState[5]} height="80">
          <br /> - 수령일로부터 7일 이내에 제품이 도착하여야 처리가 가능합니다.
          <br /> - 사전 접수 없이 일방적으로 보낸 제품은 반송 처리됩니다.
          <br /> - 단순 변심 등 색상, 사이즈 교환으로 인한 교환/반품 배송비는 고객님 부담입니다.
          <br /> - 교환은 동일 제품만 가능합니다.
          <br /> - 제품 불량 또는 오배송에 의한 왕복 배송비는 루키즈에서 부담합니다.
          <br /> - 반품 배송비 이외 추가로 요금이 발생할 경우 별도로 입금 요청드릴 수 있습니다.
        </S.Content>

        <S.PolicyBox onClick={() => handleClickPolicyBox(6)}>
          교환 및 반품이 불가한 경우
        </S.PolicyBox>
        <S.Content isDropDown={policyState[6]} height="35">
          <br /> - 고객의 부주의로 제품이 훼손되거나 하자가 발생한 경우
          <br /> - 제품 수령일로부터 7일이 지난 경우
          <br /> - 착용 후 향수 등의 오염이나 심한 구김으로 제품의 가치가 감소한 경우
        </S.Content>
      </S.PolicyContentContainer>
    </S.Container>
  );
}

export default FAQ;
