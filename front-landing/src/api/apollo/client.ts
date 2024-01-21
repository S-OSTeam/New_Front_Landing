import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

const httpLink = createHttpLink({
    uri: 'https://deamhome.synology.me/land/graphiql?path=/land/graphql'
  })

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  export default client