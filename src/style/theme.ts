import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  base: '1rem',
  palette: {
    common: {
      black: '#222831',
      white: '#FFFAFF',
      grey: '#332C41',
    },
    primary: {
      main: '#20123A',
      lighter: '#361A68',
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
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#0f0e17',
      lighter: '#a7a9be',
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
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#eff0f3',
      lighter: '#a7a9be',
      contrastText: '#0d0d0d',
    },
    secondary: {
      main: '#ff8e3c',
      contrastText: '#0d0d0d',
    },
    tertiary: {
      main: '#d9376e',
      contrastText: '#0d0d0d',
    },
  },
};

export default defaultTheme;
