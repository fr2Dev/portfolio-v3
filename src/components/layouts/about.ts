import styled from 'styled-components';

export const About = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(12, 1fr);

  & > * {
    &:first-child {
      grid-column: span 12;
      order: 2;
    }
    &:last-child {
      grid-column: span 12;
      margin: auto;
    }

    @media only screen and (min-width: 992px) {
      &:first-child {
        grid-column: span 6;
        order: 0;
      }
      &:last-child {
        grid-column: span 6;
      }
    }
  }
`;
