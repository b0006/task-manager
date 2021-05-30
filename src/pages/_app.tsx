import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

import { Provider as NotificationProvider } from 'src/modules/common/ui-kit/Notification';
import { ProfileProvider } from 'src/modules/profile/context';
import { withCombineComponents } from 'src/modules/layout/hooks';

import Layout from 'src/modules/layout/components/Layout';
import 'src/styles/index.scss';

const providers = [NotificationProvider, ProfileProvider];
const AppContextProvider = withCombineComponents(...providers);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppContextProvider>
      <Layout>
        <Head>
          <title>Online shop</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
