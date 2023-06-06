import '@/src/components/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { store } from '@/src/components/store/store';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
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
      </Provider>
    </QueryClientProvider>
  );
}
