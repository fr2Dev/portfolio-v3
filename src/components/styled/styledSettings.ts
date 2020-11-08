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
  background-color: ${({ theme, $open }) =>
    $open ? theme.palette.card.background : theme.palette.primary.main};
  display: grid;
  height: var(--sizeButton);
  place-items: center;
  padding: 0.5rem;
  transition: background-color var(--transition);
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
  background-color: ${({ theme }) => theme.palette.card.background};
  box-shadow: var(--shadow);
  padding: calc(var(--base) / 2) 0;
  border-radius: var(--radius);
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 200px;
  position: absolute;
  top: calc(100% - 0.5rem);
  left: 0;
  z-index: 1;

  .radio {
    display: grid;
    grid-template-columns: min-content auto;
    grid-gap: 0.5em;
    font-size: 2.25rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.primary.contrastText};

    &:focus-within {
      .radio__label {
        transform: scale(1.05);
        opacity: 1;
      }
    }
  }

  .radio__label {
    line-height: 1;
    transition: 180ms all ease-in-out;
    opacity: 0.8;
  }

  .radio__input {
    display: flex;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:focus + .radio__control {
        box-shadow: 0 0 0 0.05em ${({ theme }) => theme.palette.primary.contrastText},
          0 0 0.15em 0.1em ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }

  .radio-gradient input:checked + .radio__control {
    background: radial-gradient(
      ${({ theme }) => theme.palette.secondary.main} 50%,
      rgba(255, 0, 0, 0) 51%
    );
  }

  .radio-before {
    .radio__control {
      display: grid;
      place-items: center;
    }

    input + .radio__control::before {
      content: '';
      width: 0.5em;
      height: 0.5em;
      box-shadow: inset 0.5em 0.5em ${({ theme }) => theme.palette.secondary.main};
      border-radius: 50%;
      transition: 180ms transform ease-in-out;
      transform: scale(0);
    }

    input:checked + .radio__control::before {
      transform: scale(1);
    }
  }

  .radio__control {
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 0.1em solid ${({ theme }) => theme.palette.secondary.main};
    transform: translateY(-0.05em);
  }
`;

export const Setting = styled.li`
  align-items: center;
  display: flex;
  font-size: 0.95rem;
  padding: calc(var(--base) / 2) var(--base);
`;

export const Divider = styled.span`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  height: 1px;
  margin-top: 2px;
  margin-left: 0.5rem;
  opacity: 0.2;
  width: 100%;
`;

interface OpenProps {
  $open: boolean;
}
