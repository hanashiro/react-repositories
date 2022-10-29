import { styled, Paper } from '@mui/material';
// import { RepositoryCardProps } from './RepositoryCard';

export const CardContainer = styled(Paper)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing()};
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const CardTitleContainer = styled('span')`
    display: flex;
    gap: ${({ theme }) => theme.spacing()};
    align-items: center;

    &:hover {
        opacity: 0.8;
    }
`;

export const CardFooter = styled('footer')`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
`;
