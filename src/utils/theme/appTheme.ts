import {  createTheme } from '@material-ui/core/styles';

export const themeX = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#32757a',
    },
    secondary:  {
      main: '#2fc2a4',
      dark: '#40a990',
      light: '#86e3d0',
    },
    error: {
      main: '#d77474',
    },
    divider: 'rgba(56,126,118,0.56)',
    info: {
      main: '#79afdd',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 700,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    h1: {
      fontFamily: 'Droid Serif',
      fontSize: '5rem',
      fontWeight: 500,
      lineHeight: 0.91,
    },
    h2: {
      fontFamily: 'Droid Serif',
      fontSize: '3.3rem',
      fontWeight: 500,
      lineHeight: 0.86,
    },
    h3: {
      fontFamily: 'Droid Serif',
      fontSize: '2.5rem',
      fontWeight: 200,
      lineHeight: 0.81,
    },
    h4: {
      fontFamily: 'Droid Serif',
      fontSize: '2rem',
      fontWeight: 200,
      lineHeight: 0.98,
    },
    h5: {
      fontFamily: 'Droid Serif',
      fontSize: '1.7rem',
      fontWeight: 200,
      lineHeight: 0.98,
    },
    h6: {
      fontFamily: 'Droid Serif',
      fontWeight: 400,
      fontSize: '1.4rem',
      lineHeight: 0.8,
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontWeight: 400,
      lineHeight: 1.34,
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontFamily: 'Raleway',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: 'Lato',
      fontSize: '0.9rem',
      fontWeight: 500,
      lineHeight: 1.65,
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.44,
    },
    button: {
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    caption: {
      fontSize: '0.7rem',
      fontWeight: 500,
    },
  },
});
export default themeX;