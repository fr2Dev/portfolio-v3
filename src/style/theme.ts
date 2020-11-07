import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  base: '1rem',
  palette: {
    common: {
      black: '#222831',
      white: '#FFFAFF',
      grey: {
        main: '#332C41',
        light: '#D6E6FF',
      },
    },
    primary: {
      main: '#20123A',
      light: '#361A68',
      contrastText: '#FFFAFF',
    },
    secondary: {
      main: '#88FFD1',
      contrastText: '#20123A',
    },
    tertiary: {
      main: '#D6E6FF',
      contrastText: '#20123A',
    },
    card: {
      bar: '#D6E6FF',
      background: '#332C41',
      comments: 'lightslategray',
    },
    discret: '#D6E6FF',
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#161a1c',
      light: '#a7a9be',
      contrastText: '#fffffe',
    },
    secondary: {
      main: '#ff8906',
      contrastText: '#0d0d0d',
    },
    tertiary: {
      main: '#f25f4c',
      contrastText: '#0d0d0d',
    },
    card: {
      bar: '#0f0e17',
      background: '#23232a',
      comments: 'lightslategray',
    },
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    common: {
      ...defaultTheme.palette.common,
      grey: {
        main: '#FFFAFF',
        light: '#D6E6FF',
      },
    },
    primary: {
      main: '#eff0f3',
      light: '#a7a9be',
      contrastText: '#0d0d0d',
    },
    secondary: {
      main: '#592990',
      contrastText: '#FFFAFF',
    },
    tertiary: {
      main: '#d9376e',
      contrastText: '#0d0d0d',
    },
    card: {
      bar: '#353535',
      background: '#f9f9f9',
      comments: '#5f6d7b',
    },
    discret: '#6f6f6f',
  },
};

export default defaultTheme;
