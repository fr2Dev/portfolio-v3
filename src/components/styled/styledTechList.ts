import styled from 'styled-components';
import { Row } from '../layouts';

export const TechList = styled(Row)`
  margin-top: 0.75rem;

  li {
    margin-top: 0.25rem;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
