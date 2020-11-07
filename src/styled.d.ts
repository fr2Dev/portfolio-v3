import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
  lighter?: string;
}

export interface DefaultTheme {
  borderRadius: string;
  base: string;
  palette: {
    common: {
      black: string;
      white: string;
      grey: string;
    };
    primary: IPalette;
    secondary: IPalette;
    tertiary: IPalette;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    base: string;
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
      };
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
    };
  }
}
