import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;

      a:visited {
        color:whitesmoke;
        
      }
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    body {
      font-family: "Montserrat", sans-serif;
      margin: 0 50px;
      background-color: #333;
      color: white;
    }
`;

export default GlobalStyle;

