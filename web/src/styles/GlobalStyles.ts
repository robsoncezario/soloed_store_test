import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    font-variant-ligatures: none;
  }

  * {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: #E5E5E5;
  }
`