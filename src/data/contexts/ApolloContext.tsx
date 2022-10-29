import React, { PropsWithChildren } from 'react';
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const link = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    if (!token) {
        throw new Error(
            'No token provided. Please, provide a valid token in the .env.local file'
        );
    }

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
});

const ApolloContext: React.FC<PropsWithChildren> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContext;
