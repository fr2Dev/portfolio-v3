import styled from 'styled-components';

export const ItemNav = styled.li`
  display: grid;
  place-items: center;
  padding: 0 var(--base, 1rem);
`;

export const Nav = styled.nav`
  margin-top: var(--base, 1rem);

  ${ItemNav} {
    padding: 0 var(--base, 1rem);

    a {
      padding: calc(var(--base, 1rem) / 2) 0;
      border-bottom: 2px solid transparent;
    }

    &:hover a,
    a:focus {
      border-color: var(--clr-secondary);
    }

    a:focus {
      outline: none;
    }
  }

  @media only screen and (min-width: 768px) {
    & > *:first-child {
      margin-right: auto;
    }
  }
`;
