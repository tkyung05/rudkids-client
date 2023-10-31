import CursorContext from '@/context';
import { useContext, useEffect } from 'react';

import { CURSOR_STATUS } from '@/constants';

const useCursor = (cursorList: { onCursorStatus: any; targetClassName: string }[]) => {
  const { setSelectedCursor } = useContext(CursorContext);

  const offCursorEvent = () => setSelectedCursor(CURSOR_STATUS.DEFAULT);

  const cursorEventLoop = () => {
    for (let i = 0; i < cursorList.length; i++) {
      const cursorData = cursorList[i];
      const targetElements = document.getElementsByClassName(cursorData.targetClassName);

      for (let j = 0; j < targetElements.length; j++) {
        targetElements[j].addEventListener('mouseenter', () =>
          setSelectedCursor(cursorData.onCursorStatus)
        );
        targetElements[j].addEventListener('mouseleave', offCursorEvent);
      }
    }
  };

  useEffect(() => {
    cursorEventLoop();

    return cursorEventLoop();
  });

  return { offCursor: offCursorEvent };
};

export default useCursor;
