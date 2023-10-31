import { useState } from 'react';

import * as S from './PolicyList';

const DESCRIPTION = 'description';
const SIZE_AND_GUIDE = 'sizeAndGuide';
const DELIVERY_AND_RETURNS = 'deliveryAndReturns';

type PolicyKeyType = typeof DESCRIPTION | typeof SIZE_AND_GUIDE | typeof DELIVERY_AND_RETURNS;

interface PolicyListPropsType {
  itemBio: string;
}

function PolicyList(props: PolicyListPropsType) {
  const [policyStates, setPolicyStates] = useState({
    [DESCRIPTION]: false,
    [SIZE_AND_GUIDE]: false,
    [DELIVERY_AND_RETURNS]: false,
  });

  const handleClickPolicyButton = (key: PolicyKeyType) => {
    const policyState = { ...policyStates };
    policyState[key] = !policyState[key];
    setPolicyStates(policyState);
  };

  return (
    <S.PolicyList>
      <S.PolicyButton onClick={() => handleClickPolicyButton(DESCRIPTION)}>
        <S.PolicyCheckBox />
        <S.PolicyTitle>Description</S.PolicyTitle>
      </S.PolicyButton>
      {policyStates[DESCRIPTION] && <S.PolicyContent>{props.itemBio}</S.PolicyContent>}

      <S.PolicyButton onClick={() => handleClickPolicyButton(SIZE_AND_GUIDE)}>
        <S.PolicyCheckBox />
        <S.PolicyTitle>Size & Guide</S.PolicyTitle>
      </S.PolicyButton>
      {policyStates[SIZE_AND_GUIDE] && <S.PolicyContent>사이즈는 가이드야</S.PolicyContent>}

      <S.PolicyButton onClick={() => handleClickPolicyButton(DELIVERY_AND_RETURNS)}>
        <S.PolicyCheckBox />
        <S.PolicyTitle>Delivery & Returns</S.PolicyTitle>
      </S.PolicyButton>
      {policyStates[DELIVERY_AND_RETURNS] && (
        <S.PolicyContent>배달은 루키즈야 환불은 없어</S.PolicyContent>
      )}
    </S.PolicyList>
  );
}

export default PolicyList;
