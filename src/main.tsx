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

const client = createClient({
  url: 'http://localhost:4000/',
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
