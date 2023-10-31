import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

interface UseDeleteElementPropsType {
  targetElementTagName: string;
}

function useDeleteElement(props: UseDeleteElementPropsType) {
  const router = useRouter();

  const targetElementRef = useRef<any>();

  useEffect(() => {
    targetElementRef.current = document.getElementsByTagName(props.targetElementTagName);
  }, []);

  const deleteElement = () => {
    if (targetElementRef.current) {
      targetElementRef.current[0].style.display = 'none';
    }
  };

  const routeChageEvent = () => {
    if (targetElementRef.current) {
      targetElementRef.current[0].style.display = '';
    }
  };

  useEffect(() => {
    router.events.on('routeChangeStart', routeChageEvent);
    return () => {
      router.events.off('routeChangeStart', routeChageEvent);
    };
  }, [routeChageEvent, router.events]);

  return { deleteElement };
}

export default useDeleteElement;
