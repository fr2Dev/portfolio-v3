import styled, { css } from 'styled-components';

export const Header = styled.header`
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: min(50vw, 400px);
  }
`;
