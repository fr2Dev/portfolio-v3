import { createGlobalStyle } from 'styled-components';
import { normalize, reset, vars } from './';

const GlobalStyle = createGlobalStyle`
 ${normalize}
 ${reset}

/* CUSTOM */
    :root {
      ${vars}
    }

    /* * {
      outline: 2px dashed yellowgreen;
    } */

  body {
    background-color: var(--clr-main);
    color: var(--clr-white);
    margin: 0;
    font-family: 'Open sans';
    font-size: 1.15rem;
  }

  h1,h2,h3,h4,h5,h6 {
  font-family: 'Bree Serif';
  }

  h1,h2 {
    font-size: 72px;
    font-size: clamp(2.5rem, calc(5vw + 1rem), 4.5rem);
  }

  h2,h3 {
    color: var(--clr-tertiary);
  }

  h3 {
    font-size: 40px;
    font-size: clamp(1.5rem, calc(3vw + 1rem), 2.5rem);

  }

  section {
    padding: var(--p-section, 1.5rem) 0;

    @media only screen and (min-width: 576px) {
      --p-section: 2rem;
    }

    @media only screen and (min-width: 768px) {
      --p-section: 3rem;
    }

    @media only screen and (min-width: 992px) {
      --p-section: 4.5rem;
    }

    @media only screen and (min-width: 1200px) {
      --p-section: 6rem;
    }
  }

  ::selection {
    background: var(--clr-secondary);
    color: var(--clr-white);
  }

  .tech {
    color: var(--clr-secondary);
    font-family: 'Fira Code', 'monospace';
  }

  .flow {
    & > * + * {
      margin-top: 2rem;
    }
  }
 
`;

export default GlobalStyle;
