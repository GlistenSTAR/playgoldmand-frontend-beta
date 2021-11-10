import '../styles/globals.css'
import "regenerator-runtime/runtime";
import { QueryClientProvider, QueryClient } from 'react-query'
import {withUAL, UALProvider} from "ual-reactjs-renderer";
import {Anchor} from "ual-anchor";
import {Wax} from "@eosdacio/ual-wax";
import config from '../config/config.json';
export const queryClient = new QueryClient()

const waxNet = {
  chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
  rpcEndpoints: [{
    protocol: 'https',
    host: config.api_endpoint.replace('https://', '').replace('http://', ''),
    port: 443,
  }]
};

const anchor = new Anchor([waxNet], {
    appName: config.app_name
});

const wax = new Wax([waxNet]);

const wallets = [wax, anchor];

function MyApp({ Component, pageProps }) {
  const AppContainer = (props) => {
    return (
      <div>
        <Component {...props} />
      </div>
    )

  }

  const AppWithUAL = withUAL(AppContainer);

  return (
      <UALProvider chains={[waxNet]} authenticators={wallets} appName={config.app_name}>
        <QueryClientProvider client={queryClient}>
          <AppWithUAL {...pageProps} />
        </QueryClientProvider>
      </UALProvider>
    );
}

export default MyApp