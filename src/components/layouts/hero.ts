import styled from 'styled-components';

export const Hero = styled.section`
  display: grid;
  place-content: center start;
  position: relative;
  /* nav height + nav margin-top */
  min-height: calc(100vh - 40px - 1rem);

  & > * + * {
    &:not(h1):not(h2):not(svg) {
      margin-top: 2rem;

      @media only screen and (min-width: 768px) {
        margin-top: 3rem;
      }
    }
  }

  h1,
  h2 {
    line-height: 1;
  }

  a {
    place-self: start;
  }

  @media only screen and (max-width: 767px) {
    p:first-child {
      margin-top: 1rem;
    }
  }

  @media only screen and (min-width: 768px) {
    /* nav height + nav margin-top */
    min-height: calc(100vh - 48px - 1rem);
  }
`;
