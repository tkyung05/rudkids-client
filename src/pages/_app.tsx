import CursorContext from '@/context';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

import { GlobalStyle } from '@/styles/\bGlobalStyle';

import Cursor from '@/components/Cursor';

import { CURSOR_STATUS } from '@/constants';
import { QUERY_CLIENT_CONFIG } from '@/constants/api';
import { RESPONSIVE } from '@/constants/style';

import SEO from '../../seo.config';
import AppLayout from './AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  const [selectedCursor, setSelectedCursor] = useState(CURSOR_STATUS.DEFAULT);
  const [cursorPosition, setCursorPosition] = useState<number[]>([-1000, -1000]);
  const [isDisableCustomCursor, setIsDisableCustomCursor] = useState<boolean>(false);

  const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_CONFIG));

  useEffect(() => {
    window.innerWidth <= parseInt(RESPONSIVE.MOBILE.MAX_WIDTH) && setIsDisableCustomCursor(true);
  }, []);

  useEffect(() => {
    const cursorEvent = ({ clientX, clientY }: MouseEvent) => {
      setCursorPosition([clientX, clientY]);
    };

    window.addEventListener('mousemove', cursorEvent);
    return () => window.removeEventListener('mousemove', cursorEvent);
  }, [selectedCursor]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CursorContext.Provider value={{ setSelectedCursor, setIsDisableCustomCursor }}>
          <RecoilRoot>
            <DefaultSeo {...SEO} />
            <GlobalStyle />

            <AppLayout>
              {!isDisableCustomCursor && (
                <Cursor
                  src={selectedCursor}
                  style={{ left: cursorPosition[0], top: cursorPosition[1] }}
                />
              )}

              <Component {...pageProps} />
            </AppLayout>
          </RecoilRoot>
        </CursorContext.Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
