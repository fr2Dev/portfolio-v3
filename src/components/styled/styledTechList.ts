import styled from 'styled-components';
import { Row } from '../layouts';

export const TechList = styled(Row)`
  margin-top: 0.75rem;

  li {
    margin-top: 0.25rem;
    color: var(--clr-secondary);
    font-family: 'Fira Code', 'monospace';
    font-size: 16px;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
