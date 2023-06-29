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
                        <Component {...pageProps} />
                    </Layout>
                </AuthProvider>
            </QueryClientProvider>
          </PersistGate>
      </Provider>

  );
}
