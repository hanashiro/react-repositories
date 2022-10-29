import { styled } from '@mui/material/styles';

export const Content = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    max-width: 40rem;
    margin: 0 auto;

    .MuiList-root,
    .MuiListItem-root {
        width: 100%;
    }
`;
