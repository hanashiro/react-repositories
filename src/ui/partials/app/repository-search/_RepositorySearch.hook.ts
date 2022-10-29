import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { REPOSITORIES_SEARCH } from '@graphql-services/queries/repositoriesQuery';
import { RepositorySearchResponse } from 'data/graphql/models/Repository';
// import { RepositorySearchPartialLogic } from './_RepositorySearch.logic';

export function useRepositorySearchPartial() {
    // #region [ Local State ]
    const [searchQuery, setSearchQuery] = useState('react');
    const [cursorPosition, setCursorPosition] = useState<string>();
    const [isBacking, setIsBacking] = useState(false);
    const perPage = 10;
    const { data, loading, error } = useQuery<RepositorySearchResponse>(
        REPOSITORIES_SEARCH(isBacking),
        {
            variables: {
                queryString: searchQuery,
                cursor: cursorPosition,
                perPage,
            },
        }
    );
    const totalPages = useMemo(() => {
        if (!data) return 0;
        return Math.ceil(data.search.repositoryCount / perPage);
    }, [data, perPage]);

    // #endregion

    // #region [ Methods ]

    const goToNextPage = useCallback(() => {
        if (!data) return;
        if (!data.search.pageInfo.hasNextPage) return;
        setIsBacking(false);
        setCursorPosition(data.search.pageInfo.endCursor);
    }, [data]);

    const goToPreviousPage = useCallback(() => {
        if (!data) return;
        if (!data.search.pageInfo.hasPreviousPage) return;
        setIsBacking(true);
        setCursorPosition(data.search.pageInfo.startCursor);
    }, [data]);
    // #endregion

    // #region [ Effects ]

    // #endregion

    return {
        searchQuery,
        setSearchQuery,
        data,
        loading,
        error,
        totalPages,
        goToNextPage,
        goToPreviousPage,
    };
}
