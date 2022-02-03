import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  Theme,
  Components,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createPalette from '@mui/material/styles/createPalette';
import createTypography from '@mui/material/styles/createTypography';
import GlobalStyles from '@mui/material/GlobalStyles';

import ComfortaaWoff2 from '../assets/fonts/Comfortaa-Regular.woff2';
import ComfortaaWoff from '../assets/fonts/Comfortaa-Regular.woff';
import ArchiveWoff2 from '../assets/fonts/Archive.woff2';
import ArchiveWoff from '../assets/fonts/Archive.woff';

const colors = {
  primary: '#ffbf42',
  lightYellow: '#fddc90',
};

const palette = createPalette({
  mode: 'dark',
  primary: {
    main: colors.primary,
  },
  background: {
    default: '#181a20',
  },
  success: {
    main: '#32f05f',
  },
  error: {
    main: '#ef0512',
  },
});

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Comfortaa-Regular';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${ComfortaaWoff2}) format('woff2'),
             url(${ComfortaaWoff}) format('woff');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Archive';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${ArchiveWoff2}) format('woff2'),
             url(${ArchiveWoff}) format('woff');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        fontSize: 18,
        padding: '16px 54px 13px 54px',
        borderRadius: '12px',
        border: 0,
        ':hover': {
          border: 0,
        },
      },
      containedPrimary: {
        backgroundImage: `linear-gradient(to left, ${colors.lightYellow}, ${palette.primary.main})`,
        transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        ':hover': {
          opacity: 0.8,
        },
      },
      outlinedPrimary: {
        boxShadow: `inset 0 0 0 2px ${palette.primary.main}`,
      },
      text: {
        fontSize: 14,
        padding: '5px 5px 2px 5px',
      },
    },
  },
};

// outlinedError and outlinedSuccess buttons global styles.
// Mui doesn't allow ammending error or success in styleOverrides
const globalStyles = `
  .MuiButton-outlinedError.MuiButton-outlinedError {
    box-shadow: inset 0 0 0 2px ${palette.error.main};
    background-color: rgba(239, 5, 18, 0.1);
  }
  .MuiButton-outlinedError.MuiButton-outlinedError:hover {
    background-color: rgba(239, 5, 18, 0.2);
  }
  .MuiButton-outlinedSuccess.MuiButton-outlinedSuccess {
    box-shadow: inset 0 0 0 2px ${palette.success.main};
    background-color: rgba(50, 240, 95, 0.1);
  }
  .MuiButton-outlinedSuccess.MuiButton-outlinedSuccess:hover {
    background-color: rgba(50, 240, 95, 0.2);
  }
`;

const typography = createTypography(palette, {
  h1: {
    fontSize: 30,
    fontFamily: 'Archive',
  },
  h2: {
    fontSize: 24,
    fontFamily: 'Archive',
  },
  h3: {
    fontSize: 20,
    fontFamily: 'Archive',
  },
  h4: {
    fontSize: 16,
    fontFamily: 'Archive',
  },
  subtitle1: {
    fontSize: 16,
  },
  button: {
    fontFamily: 'Archive',
    lineHeight: 'normal',
  },
});

const theme = responsiveFontSizes(
  createTheme({
    palette,
    components,
    typography,
  })
);

export const ThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={globalStyles} />
    {children}
  </MuiThemeProvider>
);
