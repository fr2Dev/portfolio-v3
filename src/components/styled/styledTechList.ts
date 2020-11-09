import styled, { css } from 'styled-components';
import { Row } from '../layouts';

interface TechListProps {
  $multiline?: boolean;
}

export const TechList = styled(Row)<TechListProps>`
  margin-top: 0.75rem;

  li {
    margin-top: 0.25rem;
    color: var(--clr-secondary);
    font-family: 'Fira Code', 'monospace';
    font-size: 16px;
    ${({ $multiline }) =>
      $multiline &&
      css`
        @media only screen and (min-width: 768px) and (max-width: 1199px) {
          width: var(--width, 25%);
          margin-left: 0.5rem;
          transform: translateY(-0.5rem);
        }
      `};

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
