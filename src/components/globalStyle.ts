import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* normalize */
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

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

/* CUSTOM */
  /* @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Fira+Code:wght@400;600&family=Open+Sans:wght@400;700&display=swap'); */

  /* bree-serif-regular - latin */

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