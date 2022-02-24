import { alpha, Components, Palette, Theme } from '@mui/material/styles';

import ComfortaaWoff2 from '../assets/fonts/Comfortaa-Regular.woff2';
import ComfortaaWoff from '../assets/fonts/Comfortaa-Regular.woff';
import ArchiveWoff2 from '../assets/fonts/Archive-Regular.woff2';
import ArchiveWoff from '../assets/fonts/Archive-Regular.woff';

import { colors } from './palette';

const transition = `250ms cubic-bezier(0.4, 0, 0.2, 1)`;

export const getComponents = (palette: Palette): Components<Theme> => ({
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
        padding: '16px 54px',
        border: 0,
        ':hover': {
          border: 0,
        },
      },
      containedPrimary: {
        borderRadius: '12px',
        backgroundImage: `linear-gradient(to left, ${palette.primary.light}, ${palette.primary.main})`,
        transition: `opacity ${transition}`,
        ':hover': {
          opacity: 0.8,
        },
      },
      outlined: {
        borderRadius: '8px',
      },
      outlinedPrimary: {
        boxShadow: `inset 0 0 0 2px ${palette.primary.main}`,
      },
      text: {
        fontSize: 14,
        padding: '5px',
        ':hover': {
          textDecoration: 'underline',
        },
      },
      outlinedSizeSmall: {
        padding: '8px 12px',
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        position: 'relative',
        border: '1px solid transparent',
        borderRadius: 8,
        backgroundImage: palette.boxGradient,
        backgroundClip: 'padding-box',
        ':after': {
          content: '""',
          position: 'absolute',
          top: -1,
          right: -1,
          bottom: -1,
          left: -1,
          borderRadius: 'inherit',
          backgroundImage: `linear-gradient(45deg, #2a303c, ${palette.primary.light} 30%, ${palette.primary.main}, ${palette.primary.light} 70% , #2a303c)`,
          backgroundPosition: '0% 100%',
          backgroundSize: '200% 200%',
          transition: `background-position ${transition}`,
          zIndex: -1,
        },
        ':hover': {
          ':after': {
            backgroundPosition: '100% 0%',
          },
        },
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        fontFamily: 'Archive',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontFamily: 'inherit',
        border: 'none',
        padding: 10,
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        borderTop: `1px solid ${palette.borderGrey.main}`,
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        backgroundImage: palette.boxGradient,
        borderRadius: 8,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        PaperProps: {
          square: true,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: palette.background.default,
        maxWidth: 'unset',
        fontSize: 14,
      },
      arrow: {
        color: palette.background.default,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        padding: 0,
        backgroundColor: colors.black,
      },
      paper: {
        borderRadius: 0,
        border: `1px solid ${palette.primary.dark}`,
      },
      root: {},
    },
    defaultProps: {
      PaperProps: {
        square: true,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        padding: '10px 18px',
        '&.Mui-selected': {
          backgroundColor: alpha(palette.primary.main, 0.1),
        },
        ':hover': {
          backgroundColor: alpha(palette.primary.main, 0.1),
        },
        ':focus': {
          backgroundColor: alpha(palette.primary.main, 0.2),
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      outlined: {
        background: 'none',
      },
    },
    defaultProps: {
      square: true,
      variant: 'outlined',
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      grouped: {
        ':last-of-type, :not(:last-of-type)': {
          borderRadius: '12px',
          borderColor: palette.borderGrey.main,
        },
        ':not(:last-of-type).Mui-selected, :last-of-type.Mui-selected': {
          borderColor: palette.primary.main,
        },
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        fontFamily: 'Comfortaa-Regular',
        fontWeight: 'bold',
        borderRadius: '8px !important', // !important needed to override all borderRadious from subclasses
        border: `1px solid ${palette.borderGrey.main} !important`, // !important needed to override all border properties from subclasses
        '&.Mui-selected': {
          border: `1px solid ${alpha(palette.primary.main, 1)} !important`, // !important needed to override all border properties from subclasses
        },
        '&.Mui-disabled': {
          background: 'none',
        },
      },
      sizeSmall: {
        padding: '5px 0',
        fontFamily: 'Comfortaa-Regular',
        fontSize: '12px',
        flexGrow: 1,
        gap: '5px',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundImage: palette.boxGradient,
        minHeight: '500px',
        minWidth: '500px',
        borderRadius: '8px',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        width: '100%',
        fontFamily: 'Archive',
        borderBottom: `1px solid ${palette.borderGrey.main}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px 30px',
      },
    },
  },
});