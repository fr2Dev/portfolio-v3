import styled from 'styled-components';

interface FlagProps {
  $currentLang: boolean;
}

export const Flag = styled.img<FlagProps>`
  --flagSize: 1.5rem;
  border: 2px solid
    ${({ theme, $currentLang }) => ($currentLang ? theme.palette.secondary.main : 'transparent')};
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

export const ButtonSettings = styled.button<OpenProps>`
  --sizeButton: 2.5rem;
  border-radius: 50%;
  /* background-color: ${({ theme }) => theme.palette.secondary.main}; */
  background-color: red;
  display: grid;
  height: var(--sizeButton);
  place-items: center;
  padding: 0.5rem;
  width: var(--sizeButton);

  svg {
    height: auto;
    width: 100%;
    fill: ${({ theme }) => theme.palette.primary.contrastText};
    transform: rotate(${({ $open }) => ($open ? '40deg' : '0deg')});
    transition: transform var(--transition);
  }
`;

export const SettingsList = styled.ul<OpenProps>`
  background-color: red;
  padding: calc(var(--base) / 2) 0;
  border-radius: var(--radius);
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 200px;
  position: absolute;
  top: calc(100% - 0.5rem);
  left: 0;
  z-index: 1;
`;

export const Setting = styled.li`
  padding: calc(var(--base) / 2) var(--base);
`;

interface OpenProps {
  $open: boolean;
}
