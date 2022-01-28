import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

// const uri = 'https://8080-silviabooks-ctatraining-xjj22g4q2sj.ws-eu29.gitpod.io/v1/graphql';
const uri = 'http://localhost:8080/v1/graphql';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
