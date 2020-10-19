import styled from 'styled-components';
import { Row } from '../layouts';

export const TechList = styled(Row)`
  li {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
