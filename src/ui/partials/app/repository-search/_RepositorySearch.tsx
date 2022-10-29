import React from 'react';
import {
    TextField,
    List,
    ListItem,
    CircularProgress,
    Stack,
    Button,
    Typography,
} from '@mui/material';
import RepositoryCard from '@components/data-display/RepositoryCard/RepositoryCard';
import { Content } from './_RepositorySearch.styled';

// import { RepositorySearchPartialLogic } from './_RepositorySearch.logic';
import { useRepositorySearchPartial } from './_RepositorySearch.hook';
import { NumberService } from '@services/Number/NumberService';

const RepositorySearch: React.FC = () => {
    const {
        searchQuery,
        setSearchQuery,
        data,
        loading,
        error,
        goToNextPage,
        goToPreviousPage,
    } = useRepositorySearchPartial();

    return (
        <Content>
            <TextField
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                label="Search for repositories"
                fullWidth
                sx={{ my: 3 }}
                error={!!error}
                helperText={error?.message}
            />

            {loading && <CircularProgress />}

            {!loading && !error && data?.search && (
                <>
                    <Typography>
                        {data?.search.repositoryCount > 0 ? (
                            <>
                                Found{' '}
                                {NumberService.format(
                                    data?.search.repositoryCount
                                )}{' '}
                                repositories
                            </>
                        ) : (
                            <>No repositories found</>
                        )}
                    </Typography>

                    {data?.search.repositoryCount > 0 && (
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            sx={{ width: '100%' }}
                        >
                            <Button
                                variant={'contained'}
                                onClick={goToPreviousPage}
                                sx={{ minWidth: '90px' }}
                                disabled={
                                    !data?.search.pageInfo.hasPreviousPage
                                }
                            >
                                Previous
                            </Button>
                            <Button
                                variant={'contained'}
                                onClick={goToNextPage}
                                sx={{ minWidth: '90px' }}
                                disabled={!data?.search.pageInfo.hasNextPage}
                            >
                                Next
                            </Button>
                        </Stack>
                    )}

                    <List>
                        {data?.search?.edges?.map((edge) => (
                            <ListItem key={edge?.node?.id}>
                                <RepositoryCard repository={edge?.node} />
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        </Content>
    );
};

export default RepositorySearch;
