import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default theme;
