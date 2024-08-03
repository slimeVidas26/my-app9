import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://192.168.220.2:4004/', // Replace with your GraphQL server URL
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// export const client = new ApolloClient({
//     uri: 'http://192.168.1.186:4004/',
//     cache: new InMemoryCache()
//   });