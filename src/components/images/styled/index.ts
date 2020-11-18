import styled from 'styled-components';

export const SvgIcon = styled.svg`
  width: 1rem;
  height: auto;
  fill: ${({ theme }) => theme.palette.browserNavLink.main};

  a:hover &,
  a:focus & {
    fill: ${({ theme }) => theme.palette.browserNavLink.active};
  }
`;

export const SvgDevices = styled.svg`
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
  width: 35rem;
  height: auto;

  .fill {
    &--primary {
      fill: ${({ theme }) => theme.palette.primary.main};
    }

    &--tertiary {
      fill: ${({ theme }) => theme.palette.tertiary.main};
    }
  }

  .stroke {
    &--secondary {
      stroke: ${({ theme }) => theme.palette.secondary.main};
    }
    &--tertiary {
      stroke: ${({ theme }) => theme.palette.tertiary.main};
    }
  }

  .circle-tablet {
    transform: translateY(-2px);
  }

  @media only screen and (min-width: 1440px) {
    display: block;
  }
`;
