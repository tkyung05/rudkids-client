import { useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

function useMoveToElement() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleMoveToTargetElement = () => {
    targetRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return { targetRef, handleMoveToTargetElement };
}

export default useMoveToElement;
