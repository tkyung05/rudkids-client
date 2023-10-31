import { useEffect } from 'react';

function usePreventClose() {
  const preventGoBack = () => {
    history.pushState(null, '', location.href);
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', preventGoBack);
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('popstate', preventGoBack);
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);
}

export default usePreventClose;
