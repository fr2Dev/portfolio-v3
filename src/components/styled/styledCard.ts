import styled, { css } from 'styled-components';

interface StyledCardrops {
  variant?: string;
}

export const StyledCard = styled.div`
  --padding: calc(var(--base) * 1.25);

  background-color: ${({ theme }) => theme.palette.card.background};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: var(--padding);

  ${(props: StyledCardrops) =>
    props.variant === 'experience' &&
    css`
      & > * + * {
        margin-left: 0.5rem;
      }

      h4 span {
        color: var(--clr-secondary);
      }
    `};

  ${(props: StyledCardrops) =>
    props.variant === 'message' &&
    css`
      border-left: 0.5rem solid var(--clr-secondary);
      max-width: 800px;
      margin: auto;
      width: 100%;
    `};

  ${(props: StyledCardrops) =>
    props.variant === 'browser' &&
    css`
      border-radius: 0 0 var(--radius) var(--radius);
    `};
`;

export const BrowserNav = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.palette.card.bar};
  border-radius: var(--radius) var(--radius) 0 0;
  display: flex;
  height: 1.75rem;
  padding: 0 1rem;
  width: 100%;

  .circles {
    position: relative;
  }

  .circles,
  &::before,
  &::after {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fa6058;
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    transform: translateX(1.5rem);
    background-color: #fcbd2e;
  }

  &::after {
    transform: translateX(3rem);
    background-color: #2fca40;
  }

  a {
    margin-left: auto;
  }
`;
