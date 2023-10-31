import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 0;
`;

const CIRCLE_SIZE = '10rem';

export const ToggleBox = styled.input<{
  leftContent: string;
  rightContent: string;
  leftColor: string;
  rightColor: string;
  leftBgColor: string;
  rightBgColor: string;
  circleColor: string;
}>`
  all: unset;
  z-index: 1;
  top: 0;

  display: flex;
  align-items: center;

  width: calc(${CIRCLE_SIZE} * 2);
  height: ${CIRCLE_SIZE};

  padding: 1.25rem;

  border-radius: ${CIRCLE_SIZE};
  background-color: ${(p) => p.leftBgColor};

  /* 선택X 텍스트 */
  ::before {
    position: absolute;
    left: 15%;

    content: '${(p) => p.leftContent}';

    color: ${(p) => p.leftColor};
    font-size: 4rem;
    /* 텍스트 트랜지션 */
    transition: all 0.25s ease-in-out;
  }
  /* 선택X 원 */
  ::after {
    position: relative;
    left: ${CIRCLE_SIZE};

    content: '';
    display: block;

    width: ${CIRCLE_SIZE};
    height: ${CIRCLE_SIZE};

    border-radius: 50%;
    background-color: ${(p) => p.circleColor};
    /* 원 이동 트랜지션 */
    transition: all 0.25s ease-in-out;
  }

  &:checked {
    background-color: ${(p) => p.rightBgColor};
    /* 배경색 변경 트랜지션 */
    transition: all 0.2s ease-in-out;

    /* 선택 O 텍스트 */
    ::before {
      position: absolute;
      left: 65%;

      content: '${(p) => p.rightContent}';
      color: ${(p) => p.rightColor};
    }
    /* 선택 O 원 */
    ::after {
      position: relative;
      left: 0;

      content: '';
      display: block;

      width: ${CIRCLE_SIZE};
      height: ${CIRCLE_SIZE};

      border-radius: 50%;
      background-color: ${(p) => p.circleColor};
    }
  }
`;
