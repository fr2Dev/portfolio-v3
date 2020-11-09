import styled from 'styled-components';

export const ScrollButton = styled.button`
  --size: 3rem;
  align-items: center;
  animation: fadeIn 0.3s;
  bottom: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  position: fixed;
  right: 20px;
  transition: opacity 0.4s;
  width: var(--size);
  height: var(--size);
  z-index: 1000;

  &:hover,
  &:focus {
    span {
      position: relative;
      animation: shake 0.15s ease infinite;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: calc(100% - 0.3rem);
        left: 50%;
        transform: translateX(-50%);
        width: 0.4rem;
        height: 1rem;
        background: linear-gradient(${({ theme }) => theme.palette.secondary.main}, transparent);
        z-index: -1;
      }

      &::after {
        filter: blur(20px);
      }
    }
  }

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.25;
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateY(-1px);
    }
    50% {
      transform: translateY(1px);
    }
  }
`;
