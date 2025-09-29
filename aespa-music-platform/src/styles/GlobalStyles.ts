// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Jua', 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: inherit;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .ae {
    display: inline-block;
    background: linear-gradient(135deg, #f472b6 10%, #c084fc 50%, #60a5fa 90%);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 0.05em;
  }
`;

export default GlobalStyle;
