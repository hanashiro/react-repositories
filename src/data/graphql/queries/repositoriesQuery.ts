import { gql } from '@apollo/client';

export const REPOSITORIES_SEARCH = (isBacking = false) => gql`
    query listRepositories(
        $queryString: String!
        $perPage: Int = 25
        $cursor: String
    ) {
        search(
            query: $queryString
            type: REPOSITORY
            ${!isBacking ? 'after' : 'before'}: $cursor
            ${!isBacking ? 'first' : 'last'}: $perPage
        ) {
            repositoryCount
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    ... on Repository {
                        id
                        name
                        url
                        forkCount
                        stargazerCount
                        owner {
                            login
                            url
                            avatarUrl
                        }
                    }
                }
            }
        }
    }
`;
