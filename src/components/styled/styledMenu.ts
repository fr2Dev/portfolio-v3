import styled from 'styled-components';
import { Row } from '../layouts';

export const Menu = styled(Row)`
  display: none;
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
