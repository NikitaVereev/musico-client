import '@/src/components/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { store } from '@/src/components/store/store';
import ReduxToast from "@/src/providers/ReduxToast";
import AuthProvider from "@/src/providers/auth-provider/AuthProvider";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return (

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
        <AuthProvider Component={Component}>
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
      </Provider>

  );
}
