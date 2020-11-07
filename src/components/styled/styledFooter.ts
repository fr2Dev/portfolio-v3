import styled from 'styled-components';

export const Footer = styled.footer`
  color: ${({ theme }) => theme.palette.tertiary.main};
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: -1.5rem;
  }
`;
