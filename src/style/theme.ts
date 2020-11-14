import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

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
      background: {
        main: '#332C41',
        reversed: '#221e2c',
      },
      comments: 'lightslategray',
    },
    discret: '#D6E6FF',
    newWindow: '#444',
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#161a1c',
      light: '#23232a',
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
      background: {
        main: '#23232a',
        reversed: '#33333d',
      },
      comments: 'lightslategray',
    },
    newWindow: '#f9f9f9',
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
      light: '#f9f9f9',
      contrastText: '#0d0d0d',
    },
    secondary: {
      main: '#cb1c57',
      contrastText: '#FFFAFF',
    },
    tertiary: {
      main: '#592990',
      contrastText: '#0d0d0d',
    },
    card: {
      bar: '#353535',
      background: {
        main: '#f9f9f9',
        reversed: rgba('#cb1c57', 0.025),
      },
      comments: '#5f6d7b',
    },
    discret: '#6f6f6f',
    newWindow: '#f9f9f9',
  },
};

export default defaultTheme;
