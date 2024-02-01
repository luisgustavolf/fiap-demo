import { createTheme } from "@mui/material";

export const FIAPTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ED145B'
    },
    secondary: {
      main: '#ACC1CC'
    },
    background: {
      default: '#1B1D1D'
    }
  },
  shape: {
    borderRadius: 1
  },
});