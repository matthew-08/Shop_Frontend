import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Provider,
} from 'urql';
import App from './App';
import theme from './theme';
import getToken from './utils/getToken';

const client = createClient({
  url: 'http://localhost:4000/',
  fetchOptions: () => {
    const token = getToken();
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider value={client}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
