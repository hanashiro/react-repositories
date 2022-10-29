import React from 'react';
import { Story, Meta } from '@storybook/react';

import RepositoryCard, { RepositoryCardProps } from './RepositoryCard';

export default {
    title: 'data-display/RepositoryCard',
    component: RepositoryCard,
    argTypes: {},
} as Meta;

const Template: Story<RepositoryCardProps> = ({ ...args }) => (
    <RepositoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    repository: {
        id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
        name: 'react',
        description:
            'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        forkCount: 40822,
        stargazerCount: 196965,
        url: 'https://github.com/facebook/react',
        owner: {
            login: 'facebook',
            id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
            url: 'https://github.com/facebook',
            avatarUrl: 'https://avatars.githubusercontent.com/u/69631?v=4',
        },
    },
};
