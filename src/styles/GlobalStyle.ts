import { createGlobalStyle } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/Header/Header.style';

import { FONT, PALETTE, RESPONSIVE } from '@/constants/style';

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;

  @font-face {
    font-family: 'Meshroom';
    src: url('/fonts/TheMeshroomRegular.woff') format('woff');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Doss';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSSaemmul.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  font-size: ${RESPONSIVE.LAPTOP.FONT_SIZE};
  * {
    font-family: ${FONT.DEFAULT};
  }

  @media (max-width: ${RESPONSIVE.TABLET.MAX_WIDTH}) {
    font-size: ${RESPONSIVE.TABLET.FONT_SIZE};
  }

  @media (max-width: ${RESPONSIVE.MOBILE.MAX_WIDTH}) {
    font-size: ${RESPONSIVE.MOBILE.FONT_SIZE};
  }

  *::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
  scrollbar-width: none; /* 파이어폭스 */
}
body {
  .swal2-container {
      padding: 0 4rem 0 0;
    }

  * {
    cursor: none;

    .swal2-popup {
      margin-top: calc(${HEADER_HEIGHT} + 2rem);

      .swal2-title {
        font-size: 4rem;
      }

      &, * {
        font-size: 3rem;
      }
    }
  }

  background-color: ${PALETTE.YELLOW_LIGHT};
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration-line: none;
}
button {
  background: none;
  border: none;
  padding: 0;
}
input {
  background: none;
  border: none;
  outline: none;
  padding: 0;
}
`;
