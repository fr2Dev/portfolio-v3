import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
  light?: string;
}

interface ICard {
  bar: string;
  background: {
    main: string;
    reversed: string;
  };
  comments: string;
}

export interface DefaultThemeBase {
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
    browserNavLink: {
      main: string;
      active: string;
    };
  };
}

export interface DefaultTheme extends DefaultThemeBase {}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeBase {}
}
