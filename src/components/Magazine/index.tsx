import * as S from './Magazine.style';
import MagazineList from './MagazineList';

function Magazine() {
  return (
    <S.Container>
      <S.MagazineContainer>
        <S.Title>Magazine</S.Title>
        <MagazineList />
      </S.MagazineContainer>
    </S.Container>
  );
}

export default Magazine;
