import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './Components/App';

// Material UI
import '@fontsource/roboto';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './Theme/Theme';

// React Router
import { BrowserRouter } from 'react-router-dom';

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);