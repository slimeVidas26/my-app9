import { ApolloClient, InMemoryCache } from '@apollo/client';




export const client = new ApolloClient({
    uri: 'http:// 192.168.1.178:4004/',
    cache: new InMemoryCache()
  });