
import { Home } from '../pages/home';
import { ReactQueryClient } from './providers/react-query';


export default function App() {
  return (
    <ReactQueryClient>
      <Home />
    </ReactQueryClient>
  );
}


