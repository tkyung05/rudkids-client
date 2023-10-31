import CursorContext from '@/context';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

import { GlobalStyle } from '@/styles/\bGlobalStyle';

import Cursor from '@/components/Cursor';

import { CURSOR_STATUS } from '@/constants';
import { RESPONSIVE } from '@/constants/style';

import SEO from '../../seo.config';
import AppLayout from './AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  const [selectedCursor, setSelectedCursor] = useState(CURSOR_STATUS.DEFAULT);
  const [cursorPosition, setCursorPosition] = useState<number[]>([-1000, -1000]);
  const [isDisableCustomCursor, setIsDisableCustomCursor] = useState<boolean>(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  );

  useEffect(() => {
    window.innerWidth <= parseInt(RESPONSIVE.MOBILE.MAX_WIDTH) && setIsDisableCustomCursor(true);
  }, []);

  useEffect(() => {
    const cursorEvent = ({ clientX, clientY }: MouseEvent) => {
      const position = [clientX, clientY];

      switch (selectedCursor) {
        case CURSOR_STATUS.DEFAULT:
          position[0] -= 10;
          position[1] -= 35;
          break;
        case CURSOR_STATUS.FUCK_YOU:
          position[0] -= 10;
          position[1] -= 250;
          break;
        case CURSOR_STATUS.THUMBS_UP:
          position[0] -= 10;
          position[1] -= 55;
          break;
      }
      setCursorPosition(position);
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
