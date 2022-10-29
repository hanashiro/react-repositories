import { gql } from '@apollo/client';

export const REPOSITORIES_SEARCH = gql`
    query listRepositories(
        $queryString: String!
        $perPage: Int = 25
        $cursor: String
    ) {
        search(
            first: $perPage
            query: $queryString
            type: REPOSITORY
            after: $cursor
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
