import styled from 'styled-components';
import { rgba } from 'polished';
import { SvgIcon } from '../images/styled';

export const Footer = styled.footer`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: -1.5rem;
  }
`;

export const Networks = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;

  li {
    & + li {
      margin-left: 0.75rem;
    }
  }

  ${SvgIcon} {
    fill: ${({ theme }) => rgba(theme.palette.primary.contrastText, 0.5)};
    width: 1.5rem;
    transition: fill var(--transition);
  }

  a:hover ${SvgIcon}, a:focus ${SvgIcon} {
    fill: ${({ theme }) => theme.palette.tertiary.main};
  }
`;
