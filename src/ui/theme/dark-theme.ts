import { createTheme } from '@mui/material';
import commonTheme from './common-theme';

const theme = createTheme({
    ...commonTheme,
    palette: {
        mode: 'dark',
        primary: { main: '#d7aefb' },
        secondary: { main: '#f486c3' },
        success: { main: '#50fa7b' },
        error: { main: '#f61c0d' },
        warning: { main: '#f19b0b' },
        info: { main: '#b0dde9' },
        text: {
            primary: '#fff',
            secondary: '#bcc2cd',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            default: '#24202e',
            paper: '#1f1f28',
        },
    },
});

export default theme;
