import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';
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
          <link rel="icon" href="./favicon.png" />

          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap"
          />
          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          />

          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap"
            as="font"
          />
          <link href="https://fonts.googleapis.com/css2?family=Ultra&display=swap" as="font" />
          <link href="https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap" as="font" />

          <link
            href="https://fonts.googleapis.com/css2?family=Belanosima:wght@600&display=swap"
            as="font"
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
