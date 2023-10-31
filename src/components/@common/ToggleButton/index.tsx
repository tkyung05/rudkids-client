import * as S from './ToggleButton.style';

interface ToggleButtonPropsType {
  leftContent: string;
  rightContent: string;
  leftColor: string;
  rightColor: string;
  leftBgColor: string;
  rightBgColor: string;
  circleColor: string;
  hanldeClickButton: () => void;
}

function ToggleButton(props: ToggleButtonPropsType) {
  return (
    <S.Container>
      <S.ToggleBox
        leftContent={props.leftContent}
        rightContent={props.rightContent}
        leftColor={props.leftColor}
        rightColor={props.rightColor}
        leftBgColor={props.leftBgColor}
        rightBgColor={props.rightBgColor}
        circleColor={props.circleColor}
        onClick={() => props.hanldeClickButton()}
        type="checkbox"
      />
    </S.Container>
  );
}

export default ToggleButton;
