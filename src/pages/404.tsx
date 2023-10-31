import { useEffect } from 'react';

import { PATH } from '@/constants';

function NotFound() {
  useEffect(() => {
    location.replace(PATH.MAIN);
  });

  return <></>;
}

export default NotFound;
