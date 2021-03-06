import styled, { css } from 'styled-components';
import { StyledCard } from '../styled';

interface PreviewProps {
  $reversed?: boolean;
}

export const Preview = styled.div<PreviewProps>`
  --gap: 2rem;

  display: grid;
  grid: var(--grid, repeat(3, 1fr) / repeat(12, 1fr));

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    transition: transform var(--transition);
  }

  h5 {
    margin-bottom: 1rem;
  }

  & > a {
    filter: grayscale(1);
    transition: filter var(--transition);

    &:hover,
    &:focus {
      filter: none;

      img {
        transform: scale(1.025);
      }
    }
  }

  & + & {
    margin-top: var(--margin-top, 3.5rem);
  }

  & > * {
    /* link */
    &:first-child {
      background-color: ${({ theme }) => theme.palette.primary.light};
      border-radius: var(--radius);
      grid-column: var(--size-link, 1 / -1);
      grid-row: var(--height-link, 1 / -1);
      overflow: hidden;
      margin: auto;
      height: 100%;
      width: var(--width-link, 100%);
      transform: var(--transform-link, scale(0.9));

      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
    /* Card */
    &:last-child {
      grid-column: var(--size-card, 1 / -1);
      grid-row: var(--height-card, 1 / -1);
      order: ${({ $reversed }) => $reversed && -1};
      z-index: 3;

      display: grid;
      place-items: center;
    }

    @media only screen and (min-width: 768px) {
      --size-link: ${({ $reversed }) => ($reversed ? '4 / 13' : '1 / 10')};
      --height-link: 1 / -1;
      --size-card: ${({ $reversed }) => ($reversed ? '1 / 9' : '5 / 13')};
      --height-card: 2 / 6;
      --transform-link: none;
    }

    @media only screen and (min-width: 992px) {
      --size-link: ${({ $reversed }) => ($reversed ? '5 / 12' : '2 / 9')};
      --height-link: 1 / -1;
      --size-card: ${({ $reversed }) => ($reversed ? '1 / 7' : '7 / 13')};
      --height-card: 2 / 6;
    }

    @media only screen and (min-width: 1200px) {
      --size-link: ${({ $reversed }) => ($reversed ? '5 / 13' : '1 / 9')};
      --size-card: ${({ $reversed }) => ($reversed ? '1 / 7' : '7 / 13')};
      --width-link: 80%;
    }

    @media only screen and (min-width: 1440px) {
      --size-link: ${({ $reversed }) => ($reversed ? '5 / 12' : '2 / 9')};
      --size-card: ${({ $reversed }) => ($reversed ? '2 / 7' : '7 / 12')};
    }
  }

  @media only screen and (max-width: 767px) {
    ${({ $reversed, theme }) =>
      !$reversed &&
      css`
        ${StyledCard} {
          background-color: ${theme.palette.card.background.reversed};
          /* background-color: red; */
        }
      `};
  }

  @media only screen and (min-width: 768px) {
    --grid: repeat(6, 4rem) / repeat(12, 1fr);
  }

  @media only screen and (min-width: 992px) {
    --margin-top: 5rem;
  }
`;
