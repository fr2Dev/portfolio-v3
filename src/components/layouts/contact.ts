import styled from 'styled-components';
import { StyledCard } from '../styled';

export const Contact = styled.section`
  text-align: center;

  ${StyledCard} {
    @media only screen and (max-width: 575px) {
      text-align: left;
    }
  }
`;
