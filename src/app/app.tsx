
import { ReactQueryClient } from './providers/react-query';
import { BrowserRouter } from "react-router";
import { AppRoutes } from './routes/routes';

export default function App() {
  return (
    <BrowserRouter>
      <ReactQueryClient>
        <AppRoutes />
      </ReactQueryClient>
    </BrowserRouter>
  );
}


