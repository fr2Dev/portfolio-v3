import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    overflow-x: hidden;
    width: 100vw;
  }
`;
