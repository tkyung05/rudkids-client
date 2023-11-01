import FRIENDSHIP from '@/assets/png/about/friends_ship_text.png';
import KID from '@/assets/png/about/kid.png';
import NEXT_BTN from '@/assets/png/about/next_btn.png';
import START_BTN from '@/assets/png/about/start_btn.png';
import HOME_ICON from '@/assets/svg/home_pixel_icon.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useDeleteElement from '@/hooks/useDeleteElement';

import { PATH } from '@/constants';

import * as S from './About.style';
import MessageBox, { MessageBoxPropsType } from './MessageBox';

function About() {
  const { push } = useRouter();

  const { deleteElement: deleteHeader } = useDeleteElement({ targetElementTagName: 'header' });
  const { deleteElement: deleteFooter } = useDeleteElement({ targetElementTagName: 'footer' });

  const [isStart, setIsStart] = useState(false);
  const [name, setName] = useState('');

  const [curStep, setCurStep] = useState(0);

  const handleClickNextStep = () => setCurStep((step) => step + 1);

  const stepElements: MessageBoxPropsType[] = [
    {
      questionText: `안녕! 반가워요. 저희는 루키즈예요!\n대화를 시작해줘서 고마워요.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>루키즈! !</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>안녕 루키즈? ㅎㅅㅎ</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `이제 우리는 하나뿐인 친구가 될 테니,\n통성명부터 해요.\n이름을 알려줄래요?`,
      answerElement: (
        <>
          <S.AnswerBox>
            <S.NameText>내 이름은...</S.NameText>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <S.Input
                value={name}
                maxLength={4}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <S.NameText>이야!</S.NameText>
            </div>
          </S.AnswerBox>

          {name.length > 0 && <S.NextHelpText onClick={handleClickNextStep}>다음!</S.NextHelpText>}
        </>
      ),
    },
    {
      questionText: `${name}! 멋진 이름이군요! 반가워요 ${name}.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>훗. 고마워!</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `${name}은(는) 우리가 하루 평균 2번 정도 웃고 있다는 사실을 알고 있었나요?⋯ 🤷🏻‍♀️`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>헉! 하루 평균 두 번이라니.</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>말세군 말세야⋯</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `삭막하고 따분한 사회. 마음 놓고 아이처럼 웃는 일은 우리에게 사치가 돼버린지 오래죠.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>맞아! 동감이야.</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>돌아보니 그랬던 것 같네.</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `하지만, 지금부터 저희가 따분함 따위 떨쳐버리고\n200배 더 많이 웃을 수 있는 비밀을 알려드릴게요!`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `(소곤소곤) ${name}에게만 특별히요!\n따라가시겠습니까?`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>당연하지!</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>궁금한걸? 한 번 가볼래.</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `따라와주셨군요! 고마워요!`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `그 비밀은 바로⋯ Become Rudkids! '루키즈'가 되는 거예요.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>루키즈가 되기?! (궁금)</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `성인은 하루 평균 2번 웃는 반면, 어린이들은 하루에 400번 이상 웃는다고 해요.\n놀랐죠?`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>400번? 대박이다!</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>우와!</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `루키즈(Rudkids)는, Rude와 Kids를 합친 단어예요.\n무례한 아이들이라는 의미죠!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>
            무례한 아이들이라니! 전위적이군.
          </S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>대박 멋진걸?</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `${name}은 나이가 들면서, 어른이 되면서, 사회 생활을 하면서 ${name}만의 순수하고 유쾌한 모습을 숨겨버렸죠.`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `자유와 순수한 기쁨을 가진 내 모습은 왠지 ${name}을 담은 환경과 맞지 않고..`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `되려 누군가에게 무례한 아이, 철없는 악동 같아 보일까 걱정하면서요.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>
            맞아. 순수하고 유쾌한 모습은 무례하고 철 없어 보인다니까.
          </S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `자유와 기쁨을 찾기 위해서는,\n누군가 ${name}의 반항적인 모습을 무례하게 느끼더라도 솔직해져야만해요.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>동감이야.</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `${name} 안의 어린아이를 해방시키는 용감하고 멋진 관문을 거쳐야하죠.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>맞아! 용감하고 멋진 관문!</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>옳은 말씀⋯</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `루키즈가 책임지고 ${name}의 관문을 함께할게요.\n루키즈는 오직 ${name}을 위한 놀이터니까요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>흑흑. 고마워.</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>감동인걸!</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `저희는 ${name}안의 어린아이를 가두던 모든 쇠사슬을 끊을 거예요. 권태, 따분함, 분노, 슬픔, 냉소 같은 것들을요.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>좋아!</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>
            바로 그거야! 내가 그토록 원하던 것.
          </S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `주의할 것! 우리 안의 어린아이를 해방시킨다면,\n사람들은 모두 ${name}을 무례하다고 평가할지도 몰라요.`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `하지만 저희 루키즈는,\n언제나 당신 곁에서 루키즈 클럽의 혁명에 동참할 거예요.`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>마음이 든든해지는군!</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `든든하죠? ${name}, 루키즈 클럽에 가입하겠어요?`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>구미가 당기는걸! 좋아.</S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>
            루키즈 클럽이라니. 당연하지!
          </S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `축하해요! ${name}은 루키즈 클럽의 정식 멤버가 되었어요!`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `루키즈 클럽에 놀러오세요!\n루키즈는 항상 ${name}안 어린아이를 해방시키는 혁명을 이끌어나갈 거예요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton
            onClick={handleClickNextStep}
          >{`나 ${name}, 루키즈를 믿고 따라가겠어!`}</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `감동인걸요. 따라와주셔서 고마워요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>
            당연하지! 나도 이제 루키즈 클럽 회원인걸.
          </S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `루키즈의 sns 계정을 팔로우하면, 여러분은 웃음과 자유로움에 관한 통통 튀는 영감을 받아볼 수 있을 거예요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={() => window.open('https://www.instagram.com/rudkidss/')}>
            인스타 구경할래!
          </S.AnswerButton>
          <S.AnswerButton onClick={handleClickNextStep}>계속 얘기하자!</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `${name}! 위를 봐요. 벌써 우리가 이렇게 친해졌다니.\n루키즈와 함께 끝나지 않을 기쁜 여정을 떠나요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>루키즈와 함께라면 어디든!</S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `${name}과의 대화, 정말 즐거웠어요. ${name}도 즐거웠죠?\n벌써 헤어질 시간인가 봐요. 다음에 또 대화해요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>
            나도 루키즈와 대화하기 정말 즐거웠어. 헤어지기 너무 아쉬운걸⋯!
          </S.AnswerButton>
        </S.AnswerBox>
      ),
    },
    {
      questionText: `다행이에요! 루키즈는 ${name}이 아이 같이 유쾌한 모습을\n되찾을 수 있도록 매일 이곳에서 노력하고 있어요.`,
      answerElement: (
        <S.NextButton
          src={NEXT_BTN.src}
          width={NEXT_BTN.width}
          height={NEXT_BTN.height}
          alt="다음 버튼"
          onClick={handleClickNextStep}
        />
      ),
    },
    {
      questionText: `쭉 지켜봐줘요! ${name}에게 끊임없는 웃음과 해방감을 선사할 거예요!`,
      answerElement: (
        <S.AnswerBox>
          <S.AnswerButton onClick={handleClickNextStep}>
            쭉 지켜볼게. 루키즈! 또 대화하자. 너무 즐거웠어 ㅎㅁㅎ!
          </S.AnswerButton>
        </S.AnswerBox>
      ),
    },
  ];

  useEffect(() => {
    if (curStep === stepElements.length) {
      location.replace(PATH.MAIN);
    }
  }, [curStep]);

  const handleClickStartButton = () => {
    setIsStart(true);
    deleteHeader();
    deleteFooter();
  };

  return (
    <>
      <S.Container>
        {isStart && (
          <S.HomeIcon
            src={HOME_ICON}
            alt="홈 아이콘"
            onClick={() => push(PATH.MAIN)}
            width={100}
            height={100}
          />
        )}

        <S.GameContainer>
          <S.FriendshipProgreesBox>
            <S.ProgressBar value={curStep} max={stepElements.length} />
            <S.FriendshipBadge
              src={FRIENDSHIP.src}
              alt="친밀도"
              width={FRIENDSHIP.width}
              height={FRIENDSHIP.height}
            />
          </S.FriendshipProgreesBox>

          {isStart && <MessageBox {...stepElements[curStep]} />}

          {!isStart && (
            <S.StartBox>
              <S.KidImage src={KID.src} alt="애기" width={KID.width} height={KID.height} />

              <S.StartButton
                onClick={handleClickStartButton}
                src={START_BTN.src}
                alt="시작버튼"
                width={START_BTN.width}
                height={START_BTN.height}
              />
            </S.StartBox>
          )}
        </S.GameContainer>
      </S.Container>
    </>
  );
}

export default About;
