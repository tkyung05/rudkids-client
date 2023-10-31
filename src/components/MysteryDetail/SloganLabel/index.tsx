import * as S from './SloganLabel.style';

interface SloganLabelPropsType {
  slogan: string;
}

function SloganLabel(props: SloganLabelPropsType) {
  const sloganListData = Array.from({ length: 10 }, (_, idx) => (
    <S.SloganBox key={idx}>
      <S.SloganText>{props.slogan}</S.SloganText>
      <S.SloganText>{props.slogan}</S.SloganText>
      <S.SloganText>{props.slogan}</S.SloganText>
      <S.SloganText>{props.slogan}</S.SloganText>
    </S.SloganBox>
  ));

  return (
    <S.Container>
      <S.SloganContainer>{sloganListData.map((slogan) => slogan)}</S.SloganContainer>
    </S.Container>
  );
}

export default SloganLabel;
