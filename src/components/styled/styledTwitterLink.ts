import styled from 'styled-components';

export const TwitterLink = styled.a`
  color: ${({ theme }) => theme.palette.discret};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
