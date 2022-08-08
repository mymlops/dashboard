import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";

export const menuDrawerWidth = 250;

export const mobileHeaderHeight = 56;

export const desktopHeaderHeight = 64;

export const blueBlack = "#1b1e2e";

const borderRadius = 4;

const typography = {
  fontFamily: `"Inter","Helvetica","Arial",sans-serif`,
  h1: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "4.209rem",
    color: blueBlack,
  },
  h2: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "3.157rem",
    color: blueBlack,
  },
  h3: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "2.369rem",
    color: blueBlack,
  },
  h4: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "1.777rem",
    color: blueBlack,
  },
  h5: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "1.333rem",
    color: blueBlack,
  },
  h6: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "1.12rem",
    color: blueBlack,
  },
  subtitle1: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "1.25rem",
    letterSpacing: "-0.4px",
    color: "#5d5e8c",
  },
  subtitle2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#5d5e8c",
  },
  body1: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "1.12rem",
    lineHeight: 1.7,
    color: blueGrey[900],
  },
  body2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "1rem",
    color: blueGrey[800],
  },
  button: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "1rem",
    textTransform: undefined,
  },
  caption: {
    fontFamily: "Inter",
    fontSize: "0.8125rem",
    color: blueGrey[700],
  },
  overline: {
    fontFamily: "Inter",
    color: blueGrey[800],
  },
};

const palette = {
  primary: {
    main: "#625df5",
    light: "#9b8bff",
    dark: "#1633c1",
  },
  secondary: {
    main: "#e83a74",
    light: "#ff72a2",
    dark: "#b00049",
  },
  background: {
    default: "#FFFFFF",
    dark: blueBlack,
  },
  common: {
    black: "#171616",
  },
  success: {
    light: "#8FF33D",
    main: "#79C42D",
    dark: "#1b5e20",
  },
  warning: {
    light: "#ffdb5b",
    main: "#F1AA26",
    dark: "#ba7b00",
  },
  action: {
    active: blueGrey[400],
    hover: blueGrey[50],
    hoverOpacity: 0.04,
    selected: blueGrey[50],
    disabled: blueGrey[200],
    disabledBackground: blueGrey[100],
    focus: blueGrey[300],
  },
  grey: blueGrey,
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1373,
    xl: 1536,
  },
};

const components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        borderColor: blueGrey[50],
        borderWidth: "1px",
        borderStyle: "solid",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: { border: "none" },
    },
  },
};

var theme = createTheme({
  shape: {
    borderRadius: borderRadius,
  },
  palette: palette,
  breakpoints: breakpoints,
  typography: typography,
  components: components,
});

// makes typography responsive
theme = responsiveFontSizes(theme);

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>{props.children}</CssBaseline>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default theme;
