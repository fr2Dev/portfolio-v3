import styled from 'styled-components';
import { Card, Avatar } from '../index';

export const About = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
  /* FIT stretch */
  /* grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); */
  /* FILL */
  /* grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)) */

  & > * {
    &:first-child {
      grid-column: span 8;
    }
    &:last-child {
      grid-column: span 4;
      margin-left: auto;
    }
  }
`;
