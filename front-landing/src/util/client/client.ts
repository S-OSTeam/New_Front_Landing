import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const httpLink = createHttpLink({
    uri: 'https://moviethree.synology.me/api/graphql',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})