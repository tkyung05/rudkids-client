import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                  n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              })(
                window,
                document,
                'script',
                'https://connect.facebook.net/en_US/fbevents.js'
              );
              fbq('init', '1467567643988897'); //PIXEL 생성된 ID
              fbq('track', 'PageView'); // 모든 페이지를 조회하는 기능
            `,
            }}
          />

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1467567643988897&ev=PageView&noscript=1"
            />
          </noscript>

          <meta
            name="google-site-verification"
            content="NrEgfnsxZXCLi_769kBuXdOy6mnTrFuGmFS_x9bNvD8"
          />

          <link rel="icon" href="./favicon.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Ultra&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Belanosima:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
