import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";

// Redux
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  queryClient.setDefaultOptions({
    queries: {
      refetchOnWindowFocus: false,
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
export default MyApp;
