import '@/src/components/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/layout/Layout';
import {  QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { store, persistor } from '@/src/components/store/store';
import ReduxToast from "@/src/providers/ReduxToast";
import { PersistGate } from 'redux-persist/integration/react';

import AuthProvider from "@/src/providers/auth-provider/AuthProvider";
import {useReactQueryClient} from "@/src/hooks/useReactQueryClient";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Favicons from "@/src/providers/head-provider/Favicons";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useReactQueryClient()

  return (

      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <ReduxToast />
                <AuthProvider
                    //@ts-ignore
                    Component={Component}>
                    <Layout>
                        <NextNProgress
                            color="#57a53c"
                            startPosition={0.3}
                            stopDelayMs={200}
                            height={3}
                            showOnShallow={true}
                        />
                        <Head>
                            <meta charSet="UTF-8" />
                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1, maximum-scale=1.0"
                            />

                            <Favicons />

                            <meta name="theme-color" content={'#181B1E'} />
                            <meta name="msapplication-navbutton-color" content={'#181B1E'} />
                            <meta
                                name="apple-mobile-web-app-status-bar-style"
                                content={'#181B1E'}
                            />
                        </Head>
                        <Component {...pageProps} />
                    </Layout>
                </AuthProvider>
            </QueryClientProvider>
          </PersistGate>
      </Provider>

  );
}
