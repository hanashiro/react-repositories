import { createStore } from '@udecode/zustood';

export const ThemeStore = createStore('Theme')({
    mode: 'dark' as 'light' | 'dark',
}).extendActions((set, get, api) => ({
    toggleTheme() {
        const nextTheme = get.mode() === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        set.mode(nextTheme);
    },
}));
