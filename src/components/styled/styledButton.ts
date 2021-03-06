import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';

interface ButtonProps {
  outlined?: boolean;
  center?: boolean;
}

export const Button = styled.button<ButtonProps>`
  --clr-bg: var(--clr-secondary);
  --clr-font: var(--clr-primary);
  --clr-border: transparent;

  background-color: var(--clr-bg);
  border: 1px solid var(--clr-border);
  border-radius: calc(var(--radius) / 2);
  color: var(--clr-font);
  display: inline-flex;
  font-weight: 700;
  padding: 0.5em 1em;

  &:hover,
  &:focus {
    background-color: ${({ theme, outlined }) =>
      outlined
        ? rgba(theme.palette.secondary.main, 0.075)
        : darken(0.1, theme.palette.secondary.main)};
  }

  &:focus {
    /* outline: none; */
  }

  ${({ outlined }) =>
    outlined &&
    css`
      --clr-bg: transparent;
      --clr-font: var(--clr-secondary);
      --clr-border: var(--clr-secondary);
    `};

  ${({ center }) =>
    center &&
    css`
      display: flex;
      margin-left: auto;
      margin-right: auto;
    `};
`;
