import styled, { css } from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const screenSizes = [
  { breakpoint: '576px', value: '540px' },
  { breakpoint: '768px', value: '720px' },
  { breakpoint: '992px', value: '960px' },
  { breakpoint: '1200px', value: '1040px' },
  { breakpoint: '1440px', value: '1400px' },
];

export const Container = styled.div`

  margin: auto;
  max-width: 100%;
  padding: 0 var(--base);

  ${screenSizes.map((size) => {
    const { breakpoint, value } = size;

    return css`
      @media only screen and (min-width: ${breakpoint}) {
        max-width: ${value};
      }
    `;
  })}
}
`;

interface RowProps {
  flex?: string;
  wrap?: string;
  alignContent?: string;
  justifyContent?: string;
  mobile?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'initial')};
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'initial')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'initial')};
  @media screen and (max-width: 768px) {
    flex-direction: ${(props) => (props.mobile ? 'column' : 'row')};
  }
  //
`;
// export const Column = styled.div`
//   flex: ${(props) => (props.flex ? props.flex : "initial")};
//   flex-direction: column;
//   align-content: ${(props) =>
//     props.alignContent ? props.alignContent : "initial"};
//   justify-content: ${(props) =>
//     props.justifyContent ? props.justifyContent : "initial"};
//   margin: ${(props) => (props.margin ? props.margin : "0")};
//   width: ${(props) => (props.width ? props.width : "auto")};
// `;

export const Hero = styled.section`
  min-height: 100vh;

  & > * + * {
    &:not(h1):not(h2) {
      margin-top: 3rem;
    }
  }

  h1 {
    line-height: 1;
    margin-top: 2rem;
  }
  h2 {
    line-height: 1;
    margin-top: 1rem;
  }
`;
