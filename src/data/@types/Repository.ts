import { RepositoryUser } from './RepositoryUser';

export interface Repository {
    id: string;
    name: string;
    description: string;
    url: string;
    forkCount: number;
    stargazerCount: number;
    owner: RepositoryUser;
}
