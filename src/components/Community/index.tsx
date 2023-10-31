import * as S from './Community.style';
import CommunityList from './CommunityList';

function Community() {
  return (
    <S.Container>
      <S.CommunityContainer>
        <S.Title>OPEN THE DOOR!</S.Title>
        <CommunityList />
      </S.CommunityContainer>
    </S.Container>
  );
}

export default Community;
