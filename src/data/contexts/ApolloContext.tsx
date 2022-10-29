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
    let token = '';

    // workaround to make GitHub Token work
    // on GitHub Actions without revoking it
    try {
        token = window.atob(process.env.REACT_APP_GITHUB_TOKEN as string);
    } catch (error) {
        token = process.env.REACT_APP_GITHUB_TOKEN as string;
    }

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
