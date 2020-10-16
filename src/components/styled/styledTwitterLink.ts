import styled from 'styled-components';
import { rgba } from 'polished';

export const TwitterLink = styled.a`
  color: var(--clr-tertiary);
  color: ${({ theme }) => rgba(theme.colors.secondary, 0.75)};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
