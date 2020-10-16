import { createGlobalStyle } from 'styled-components';
import { normalize, reset, vars } from './';

const GlobalStyle = createGlobalStyle`
 ${normalize}
 ${reset}

/* CUSTOM */
    :root {
      ${vars}
    }

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
  }

  h2,h3 {
    color: var(--clr-tertiary);
  }

  h3 {
    font-size: 36px;
  }

  section {
    padding: var(--p-section, 4rem) 0;

    @media only screen and (min-width: 768px) {
      --p-section: 5rem;
    }

    @media only screen and (min-width: 992px) {
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
 
`;

export default GlobalStyle;
