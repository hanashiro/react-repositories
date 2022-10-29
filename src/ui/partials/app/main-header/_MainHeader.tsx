import React from 'react';
import { AppBar, Typography, IconButton } from '@mui/material';
import { ToolbarStyled } from './_MainHeader.styled';
import { ThemeStore } from '@stores/ThemeStore';
// import { MainHeaderPartialLogic } from './_MainHeader.logic';
// import { useMainHeaderPartial } from './_MainHeader.hook';

const MainHeader: React.FC = () => {
    const theme = ThemeStore.use.mode();

    return (
        <AppBar position="sticky">
            <ToolbarStyled>
                <Typography variant="h1">
                    <i className="fab fa-fw fa-github" /> GitHub Repositories
                </Typography>

                <IconButton
                    onClick={() => ThemeStore.set.toggleTheme()}
                    color={'inherit'}
                >
                    <i
                        className={`fas fa-fw ${
                            theme === 'light' ? 'fa-moon' : 'fa-sun'
                        }`}
                    />
                </IconButton>
            </ToolbarStyled>
        </AppBar>
    );
};

export default MainHeader;
