import styled from 'styled-components';
import { darken, desaturate } from 'polished';

export const SvgStyled = styled.svg`
  .pupil {
    transition: transform 0.35s ease;
    animation: hide forwards infinite 10s 2s ease-in-out;
  }

  .eyeball {
    animation: blink forwards infinite 10s 2s ease-in-out;
    transform: scale(1);
    z-index: 100;
  }

  .sweat {
    fill: ${({ theme }) => desaturate(0.5, theme.palette.secondary.main)};
  }

  @keyframes blink {
    0%,
    2%,
    60%,
    62%,
    100% {
      fill: #fff;
    }
    1%,
    61% {
      fill: #edb98a;
    }
  }

  @keyframes hide {
    0%,
    2%,
    60%,
    62%,
    100% {
      fill: #000;
    }
    1%,
    61% {
      fill: transparent;
    }
  }
`;
