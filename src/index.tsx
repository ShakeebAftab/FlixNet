import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import '@fontsource/roboto';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './Theme/Theme';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);