import { useEffect, useState } from 'react';

function useGetWindowSize() {
  const [windowSize, setWindowSize] = useState({
    curWidth: 0,
    curHeight: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          curWidth: window.innerWidth,
          curHeight: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    } else {
      return;
    }
  }, []);

  return windowSize;
}

export default useGetWindowSize;
