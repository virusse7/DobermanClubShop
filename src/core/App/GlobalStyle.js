import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      margin: 0 50px;
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    body {
      font-family: "Montserrat", sans-serif;
      
      background-color: black;
      color: white;
    }
`;

export default GlobalStyle;

