import * as S from './RadioButton.style';

function RadioButton(props: { onClick: () => void; id: string; name: string; text: string }) {
  return (
    <S.Label onClick={() => props.onClick()} htmlFor={props.id}>
      <S.Input type="radio" id={props.id} name={props.name} />
      <S.Text>{props.text}</S.Text>
    </S.Label>
  );
}

export default RadioButton;
