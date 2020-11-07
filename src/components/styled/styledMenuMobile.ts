import styled from 'styled-components';
import { Row } from '../layouts';

interface MenuMobileProps {
  open: boolean;
}

export const MenuMobile = styled(Row)<MenuMobileProps>`
  @media only screen and (max-width: 767px) {
    animation: enter var(--transition);
    align-items: center;
    background: ${({ theme }) => theme.palette.common.grey};
    bottom: 0;
    display: flex;
    font-size: clamp(1.25rem, calc(2vw + 1rem), 3rem);
    justify-content: space-evenly;
    place-items: center;
    position: absolute;
    pointer-events: none;
    right: 0;
    top: 0;
    transition: transform var(--transition), visibility var(--transition);
    transform: translateX(${(props) => (props.open ? 0 : '100%')});
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    width: 100%;
    z-index: 4;

    li {
      pointer-events: initial;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {
    border-left: 2px solid ${({ theme }) => theme.palette.secondary.main};
    width: min(50vw, 400px);
  }

  @keyframes enter {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
