import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
  light?: string;
}

interface ICard {
  bar: string;
  background: string;
  comments: string;
}

export interface DefaultTheme {
  borderRadius: string;
  base: string;
  palette: {
    common: {
      black: string;
      white: string;
      grey: {
        main: string;
        light?: string;
      };
    };
    primary: IPalette;
    secondary: IPalette;
    tertiary: IPalette;
    card: ICard;
    discret: string;
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
        grey: {
          main: string;
          light?: string;
        };
      };
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
      card: ICard;
      discret: string;
    };
  }
}
