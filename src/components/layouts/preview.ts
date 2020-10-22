import styled, { css } from 'styled-components';

interface PreviewProps {
  reversed?: boolean;
}

export const Preview = styled.div<PreviewProps>`
  --gap: 2rem;

  display: grid;
  grid: repeat(6, 4rem) / repeat(12, 1fr);

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  h5 {
    margin-bottom: 1rem;
  }

  & + & {
    margin-top: 5rem;
  }

  & > * {
    &:first-child {
      background-color: lightpink;
      border-radius: var(--radius);
      grid-column: var(--size-first, span 12);
      grid-column: var(--size-first, span 12);
      grid-row: var(--height-first, span 4);
      overflow: hidden;
      margin: auto;
      height: 100%;
      width: 80%;
    }
    &:last-child {
      grid-column: var(--size-last, span 12);
      grid-row: var(--height-last, span 4);
      order: ${({ reversed }) => reversed && -1};
      z-index: 1;

      display: grid;
      place-items: center;
    }

    @media only screen and (min-width: 992px) {
      --size-first: span 6;
      --size-last: span 6;
      --height-first: span 4;
      --height-last: 2 / span 2;
    }

    @media only screen and (min-width: 1200px) {
      /* --size-first: 2 / 9; */
      --size-first: ${({ reversed }) => (reversed ? '5 / 12' : '2 / 9')};
      --size-last: ${({ reversed }) => (reversed ? '2 / 7' : '7 / 12')};
      --height-first: 1 / -1;
      --height-last: 2 / 6;
    }
  }
`;
