import React from 'react';
import { TextField, List, ListItem, Pagination } from '@mui/material';
import RepositoryCard from '@components/data-display/RepositoryCard/RepositoryCard';
import { Content } from './_RepositorySearch.styled';
// import { RepositorySearchPartialLogic } from './_RepositorySearch.logic';
// import { useRepositorySearchPartial } from './_RepositorySearch.hook';

const RepositorySearch: React.FC = () => {
    return (
        <Content>
            <TextField
                label="Search for repositories"
                fullWidth
                sx={{ mb: 3 }}
            />

            <Pagination count={10} color="primary" />

            <List>
                <ListItem>
                    <RepositoryCard
                        repository={{
                            id: 'MDEwOlJlcG9zaXRvcnkxMjM0NTY3ODk=',
                            name: 'react',
                            url: '',
                            description:
                                'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
                            stargazerCount: 150000,
                            forkCount: 30000,
                            owner: {
                                id: 'MDQ6VXNlcjE=',
                                login: 'facebook',
                                avatarUrl:
                                    'https://avatars.githubusercontent.com/u/69631?v=4',
                                url: '',
                            },
                        }}
                    />
                </ListItem>
                <ListItem>
                    <RepositoryCard
                        repository={{
                            id: 'MDEwOlJlcG9zaXRvcnkxMjM0NTY3ODk=',
                            name: 'react',
                            url: '',
                            description:
                                'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
                            stargazerCount: 150000,
                            forkCount: 30000,
                            owner: {
                                id: 'MDQ6VXNlcjE=',
                                login: 'facebook',
                                avatarUrl:
                                    'https://avatars.githubusercontent.com/u/69631?v=4',
                                url: '',
                            },
                        }}
                    />
                </ListItem>
            </List>

            <Pagination count={10} color="primary" />
        </Content>
    );
};

export default RepositorySearch;
