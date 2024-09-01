import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.APOLLO_CLIENT_TOKEN}`,
  },
})

export default client
