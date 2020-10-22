import styled from 'styled-components';

export const Header = styled.header`
  @media only screen and (max-width: 767px) {
    /* display: none; */
    background: ${({ theme }) => theme.colors.grey};
    border-left: 2px solid ${({ theme }) => theme.colors.secondary};
    bottom: 0;
    display: grid;
    font-size: clamp(1.25rem, calc(2vw + 1rem), 3rem);
    position: absolute;
    right: 0;
    top: 0;
    place-items: center;
    width: min(50vw, 400px);
    z-index: 4;
  }
`;
