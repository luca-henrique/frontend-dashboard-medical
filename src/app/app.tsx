
import { ReactQueryClient } from './providers/react-query';
import { BrowserRouter } from "react-router";
import { AppRoutes } from './routes/routes';
import { CssBaseline } from '@mui/material';
import AppThemeProvider from './providers/theme-provider';

export default function App() {
  return (
    <AppThemeProvider >
      <CssBaseline />
      <BrowserRouter>
        <ReactQueryClient>
          <AppRoutes />
        </ReactQueryClient>
      </BrowserRouter>
    </AppThemeProvider>
  );
}


