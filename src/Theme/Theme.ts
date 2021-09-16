import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    background: {
      default: '#111111'
    },
    text: {
      primary: '#FFFFFF'
    },
    primary: {
      main: '#000000'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          display: 'none'
        }
      }
    }
  },
})