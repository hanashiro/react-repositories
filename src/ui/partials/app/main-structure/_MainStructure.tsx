import React from 'react';
import MainHeader from '../main-header/_MainHeader';
import { Box, Typography } from '@mui/material';
import { MainContent, PageContent } from './_MainStructure.styled';
// import { MainStructurePartialLogic } from './_MainStructure.logic';
// import { useMainStructurePartial } from './_MainStructure.hook';

const MainStructure: React.FC = () => {
    return (
        <PageContent>
            <MainHeader />

            <MainContent>ABC</MainContent>

            <Box sx={{ mt: 'auto', p: 2 }}>
                <Typography variant="body2" align="center">
                    <i className="fas fa-fw fa-code" /> with{' '}
                    <i className="fas fa-fw fa-heart" /> by{' '}
                    <Typography
                        variant="body2"
                        component={'a'}
                        color="secondary"
                        href="https://github.com/hanashiro"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Akira Hanashiro
                    </Typography>
                </Typography>
            </Box>
        </PageContent>
    );
};

export default MainStructure;
