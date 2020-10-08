import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
 ${normalize}
 ${reset}

/* CUSTOM */
  :root {
    --clr-main: #20123A;
    --clr-main-lighter: #361A68;
    --clr-secondary: #88FFD1;
    --clr-tertiary: #D6E6FF;
    --clr-white: #FFFAFF;
    --clr-grey: #332C41;
    --radius: 8px;
    --base: 1rem;
  }

  body {
    background-color: var(--clr-main);
    color: var(--clr-white);
    margin: 0;
    font-family: 'Open sans';
  }

  h1,h2,h3,h4,h5,h6 {
  font-family: 'Bree Serif';
  }

  h1,h2 {
    font-size: 72px;
  }

  h2,h3 {
    color: var(--clr-tertiary);
  }

  h3 {
    font-size: 36px;
  }

  .tech {
    color: var(--clr-secondary);
    font-family: 'Fira Code', 'monospace';
  }
 
`;

export default GlobalStyle;