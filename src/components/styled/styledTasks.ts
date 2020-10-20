import styled from 'styled-components';

export const Tasks = styled.ul`
  --gap: 1rem;
  --markerSize: 0.35rem;

  li {
    margin-left: var(--gap);
    position: relative;
    display: flex;
    align-items: center;

    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 0 solid transparent;
      border-bottom-width: var(--markerSize);
      border-top-width: var(--markerSize);
      border-left: var(--markerSize) solid ${({ theme }) => theme.colors.secondary};
      transform: translateX(calc(var(--gap) * -1));
    }

    & + li {
      margin-top: 0.35rem;
    }
  }
`;
