import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    background: {
      default: '#111111'
    },
    text: {
      primary: '#FFFFFF'
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