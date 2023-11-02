import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

// ... (otros imports)

const localServerLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const pokemonServerLink = new HttpLink({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
});

export const localClient = new ApolloClient({
  link: localServerLink,
  cache: new InMemoryCache(),
});

export const pokemonClient = new ApolloClient({
  link: pokemonServerLink,
  cache: new InMemoryCache(),
});