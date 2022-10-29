import React, { PropsWithChildren } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
});

const ApolloContext: React.FC<PropsWithChildren> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContext;
