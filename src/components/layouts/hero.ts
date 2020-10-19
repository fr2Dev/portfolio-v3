import styled from 'styled-components';
import devices from '../../images/devices.svg';

export const Hero = styled.section`
  min-height: 100vh;
  background: url('${devices}');
  background-repeat: no-repeat;
  background-position: 100% 40%;
  background-size: 40%;

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
`;
