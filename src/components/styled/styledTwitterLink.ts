import styled from 'styled-components';

interface TwitterLinkProps {
  $tertiary?: boolean;
}

export const TwitterLink = styled.a<TwitterLinkProps>`
  color: ${({ theme, $tertiary }) =>
    $tertiary ? theme.palette.tertiary.main : theme.palette.discret};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
