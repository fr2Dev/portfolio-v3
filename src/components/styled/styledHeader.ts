import styled from 'styled-components';

interface FlagProps {
  $currentLang: boolean;
}

export const Flag = styled.img<FlagProps>`
  --flagSize: 1.5rem;
  border: 2px solid
    ${({ theme, $currentLang }) => ($currentLang ? theme.colors.secondary : 'transparent')};
  border-radius: 50%;
  filter: ${({ $currentLang }) => !$currentLang && 'grayscale(1)'};
  height: var(--flagSize);
  width: var(--flagSize);
`;

export const FlagWrapper = styled.div`
  display: flex;

  & > * + * {
    margin-left: 0.5rem;
  }
`;
