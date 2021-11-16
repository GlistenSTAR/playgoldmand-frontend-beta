import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import "regenerator-runtime/runtime";
import Navbar from "../components/navbar/navbar"
import { QueryClientProvider, QueryClient } from 'react-query'
import {withUAL, UALProvider} from "ual-reactjs-renderer";
import {Anchor} from "ual-anchor";
import {Wax} from "@eosdacio/ual-wax";
import config from '../config/config.json';
import cb from 'classnames';
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
      <div className={cb(
        'fixed top-0 left-0 h-full w-full',
      )}>
        <Navbar {...props} />
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
