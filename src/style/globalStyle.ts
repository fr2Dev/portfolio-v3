import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { normalize, reset, getCssVars } from './';
import { DefaultTheme } from '../styled';

const GlobalStyle = createGlobalStyle<DefaultTheme>`
 ${normalize}
 ${reset}

/* CUSTOM */
    :root {
      ${({ theme }) => getCssVars(theme)};
      /* ${getCssVars} */
    }

    /* * {
      outline: 2px dashed yellowgreen;
    } */
    /* *:focus {
      outline: 2px dashed yellowgreen !important;
    } */

  html{
      &::-webkit-scrollbar{
          width: .75rem;
      }
      &::-webkit-scrollbar-thumb{
          background-color: ${({ theme }) => rgba(theme.palette.primary.contrastText, 0.25)};
          border-radius: var(--radius);
      }
      &::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.palette.primary.main};
      }
  }

  body {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin: 0;
    overflow-x: hidden;
    font-family: 'Open sans';
    font-size: 1.15rem;
    transition: background-color var(--transition);
  }

  h1,h2,h3,h4,h5,h6 {
  font-family: 'Bree Serif';
  }

  h1,h2 {
    font-size: 72px;
    font-size: clamp(2.5rem, calc(5vw + 1rem), 4.5rem);
  }

  h2,h3,h5 {
    color: var(--clr-tertiary);
  }

  h3 {
    font-size: 40px;
    font-size: clamp(1.5rem, calc(3vw + 1rem), 2.5rem);
  }

  h4, h5 {
    font-size: clamp(1.15rem, calc(2vw + 1rem), 1.5rem);
  }

  section {
    padding-bottom: var(--p-section, 1.5rem);

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
    background: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }

  .highlight {
    color: var(--clr-secondary);
  }

  body.blur {
    overflow: hidden;
    max-height: 100vh;
    max-width: 100vw;

    main {
      filter: blur(15px) brightness(0.7);
      transition: var(--transition);
      pointer-events: none;
      user-select: none;
    }
  }

  button,
  a {
    /* Remove blue hightlight on touch screen */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    /* Focusing the button with a keyboard will show a dashed black line. */
    &:focus-visible {
      outline: 3px dashed var(--clr-secondary);
    }

    /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
    &:focus:not(:focus-visible) {
      outline: none;
    }

    /* Currently only Chrome support focus-visible */
    .not-chrome & {
      &:focus {
        outline: none;
      }
    }
  }

  .flow {
    & > * + * {
      margin-top: var(--flow, 2rem);
    }
  }

  .bold {
    font-weight: 700;
  }
 
`;

export default GlobalStyle;
