import styled from 'styled-components';
import devices from '../../images/devices.svg';

export const Hero = styled.section`
  display: grid;
  place-content: center start;
  min-height: 100vh;

  & > * + * {
    &:not(h1):not(h2) {
      margin-top: 3rem;
    }
  }

  h1 {
    line-height: 1;
    margin-top: 2rem;
  }
  h2 {
    line-height: 1;
    margin-top: 1rem;
  }

  a {
    place-self: start;
  }

  @media only screen and (min-width: 1440px) {
    background: url('${devices}');
    background-repeat: no-repeat;
    background-position: 100% 40%;
    background-size: 40%;
  }
`;
