import styled, { css } from 'styled-components';

interface ButtonProps {
  open?: boolean;
}

export const ButtonHamburger = styled.button<ButtonProps>`
  margin: 1em;
  width: 32px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  &:after,
  &:before,
  & div {
    background-color: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 3px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover,
  &:focus {
    &:after,
    &:before,
    & div {
      background-color: var(--clr-secondary);
    }
  }

  ${(props) =>
    props.open &&
    css`
       {
        &:before {
          transform: translateY(8px) rotate(135deg);
          animation: enterBefore var(--transition) forwards;
        }

        &:after {
          transform: translateY(-8px) rotate(-135deg);
          animation: enterAfter var(--transition) forwards;
        }

        & div {
          transform: scale(0);
        }
      }
    `};

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @keyframes enterBefore {
    from {
      transform: translateY(0) rotate(0);
    }
    to {
      transform: translateY(8px) rotate(135deg);
    }
  }

  @keyframes enterAfter {
    from {
      transform: translateY(0) rotate(0);
    }
    to {
      transform: translateY(-8px) rotate(-135deg);
    }
  }
`;
