import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    body {
      font-family: "Montserrat", sans-serif;
      margin: 0 50px;
      background-color: #EFEEE5;
    }
`;

export default GlobalStyle;

