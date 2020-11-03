import styled from 'styled-components';

interface RowProps {
  flex?: string;
  $wrap?: string;
  alignItems?: string;
  justifyContent?: string;
  mobile?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${(props) => (props.$wrap ? props.$wrap : 'initial')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'initial')};
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
