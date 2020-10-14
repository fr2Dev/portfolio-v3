import { css } from 'styled-components';

const reset = css`
  /*** Reset ***/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0;
    cursor: pointer;
  }
  figure {
    margin: 0;
  }
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    margin: 0;
  }
  ul,
  ol,
  dd {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }
  p {
    margin: 0;
  }
  cite {
    font-style: normal;
  }
  fieldset {
    border-width: 0;
    padding: 0;
    margin: 0;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* Blur images when they have no alt attribute */
  img:not([alt]) {
    filter: blur(10px);
  }
  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default reset;
