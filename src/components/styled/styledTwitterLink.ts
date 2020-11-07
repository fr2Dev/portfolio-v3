import styled from 'styled-components';
import { rgba } from 'polished';

export const TwitterLink = styled.a`
  color: ${({ theme }) => theme.palette.discret};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
