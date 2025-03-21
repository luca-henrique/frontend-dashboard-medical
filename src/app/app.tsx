
import { Home } from '../pages/home';
import { ProductProvider } from './providers/product/product';
import { ReactQueryClient } from './providers/react-query';
import { RedeemProvider } from './providers/redeem/redeem';


export default function App() {
  return (
    <ReactQueryClient>
      <RedeemProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </RedeemProvider>
    </ReactQueryClient>
  );
}


