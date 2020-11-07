import styled from 'styled-components';

export const Comment = styled.p`
  color: ${({ theme }) => theme.palette.card.comments};
  font-style: italic;
  font-family: 'Fira code';
  font-size: 16px;
`;
