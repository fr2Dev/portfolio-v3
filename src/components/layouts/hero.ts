import styled from 'styled-components';
import { rgba } from 'polished';
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
    /* background: linear-gradient(to right, red, green 70%), url('${devices}'); */
    /* background: linear-gradient(
      to right,
      ${({ theme }) => `${rgba(theme.colors.main, 0.75)}, ${rgba(theme.colors.main, 1)} 75%`}
    ),
    url('${devices}'); */
    /* background: linear-gradient(
        to right,
        ${({ theme }) => `${rgba(theme.colors.main, 0.95)}, ${rgba(theme.colors.main, 0.95)}`}
      ),
      url('${devices}'); */
    background-repeat: no-repeat;
    background-position: 100% 40%;
    background-size: 40%;
  }
`;
