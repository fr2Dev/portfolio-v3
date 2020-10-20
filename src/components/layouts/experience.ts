import styled from 'styled-components';

export const Experience = styled.div`
  --gap: 2rem;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(12, 1fr);

  & > * {
    &:first-child {
      grid-column: var(--size-first, span 12);
    }
    &:last-child {
      grid-column: var(--size-last, span 12);
    }

    @media only screen and (min-width: 992px) {
      --size-first: span 6;
      --size-last: span 6;
    }

    @media only screen and (min-width: 1200px) {
      --size-first: 2 / span 5;
      --size-last: span 5 / -2;

      &:first-child {
        transform: translateX(calc(var(--gap) * -1));
      }
      &:last-child {
        transform: translateX(var(--gap));
      }
    }
  }
`;
