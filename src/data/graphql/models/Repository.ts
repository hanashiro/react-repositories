import { Repository } from '@typing/Repository';

export interface RepositorySearchResponse {
    search: {
        repositoryCount: number;
        pageInfo: {
            startCursor: string;
            endCursor: string;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        };
        edges: {
            node: Repository;
        }[];
    };
}
