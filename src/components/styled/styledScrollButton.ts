import styled from 'styled-components';

export const ScrollButton = styled.button`
  --size: 3rem;
  align-items: center;
  animation: fadeIn 0.3s;
  bottom: 20px;
  background-color: ${({ theme }) => theme.colors.mainLighter};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  opacity: 0.5;
  position: fixed;
  right: 20px;
  transition: opacity 0.4s;
  transform: rotate(-45deg);
  width: var(--size);
  height: var(--size);
  z-index: 1000;

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
`;
