import styled from 'styled-components';
import { rgba } from 'polished';

export const TwitterLink = styled.a`
  color: var(--clr-tertiary);
  color: ${({ theme }) => rgba(theme.palette.secondary.main, 0.75)};
  color: ${({ theme }) => theme.palette.tertiary.main};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
