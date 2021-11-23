import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css'
import "regenerator-runtime/runtime";
import cb from 'classnames';
import { QueryClientProvider, QueryClient } from 'react-query'
import { withUAL, UALProvider } from "ual-reactjs-renderer";
import { useRouter } from 'next/router'
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";

import '../styles/globals.css'
import config from '../config/config.json';
import DashboardLayout from '../components/admin/dashboard/layout';

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
  const router = useRouter();
  const AppContainer = (props) => {
    return (
      <>
        <Head>
          <title> GOLDMAND </title>
        </Head>
        {router.pathname.indexOf('/admin') !== -1 ? (
          <>
            <DashboardLayout>
              <Component {...props} />
            </DashboardLayout>
          </>) : (

          <div className={cb(
            'fixed top-0 left-0 h-full w-full',
          )}>
            <Component {...props} />
          </div>
        )}
      </>
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
