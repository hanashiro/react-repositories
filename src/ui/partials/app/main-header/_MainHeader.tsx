import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import { Component } from './_MainHeader.styled';
// import { MainHeaderPartialLogic } from './_MainHeader.logic';
// import { useMainHeaderPartial } from './_MainHeader.hook';

const MainHeader: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h1">
                    <i className="fab fa-fw fa-github" /> GitHub Repositories
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default MainHeader;
