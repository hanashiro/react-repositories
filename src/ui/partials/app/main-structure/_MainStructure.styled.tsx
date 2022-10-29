import { styled } from '@mui/material/styles';

export const PageContent = styled('div')`
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    min-height: 100vh;

    display: flex;
    flex-direction: column;
`;

export const MainContent = styled('main')`
    padding: ${({ theme }) => theme.spacing(3)};
`;
