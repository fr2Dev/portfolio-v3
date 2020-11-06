import styled from 'styled-components';

export const WrapperSuspense = styled.div`
  background-color: var(--clr-main, #20123a);
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
`;

const sizeLoader = '3rem';

export const Loader = styled.div`
  animation: spin 0.75s linear infinite;
  border: 0.4rem solid transparent;
  border-radius: 50%;
  border-top-color: var(--clr-secondary, #88ffd1);
  opacity: 0.75;
  height: ${sizeLoader};
  width: ${sizeLoader};

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
