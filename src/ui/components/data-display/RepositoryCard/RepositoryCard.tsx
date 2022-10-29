import { Repository } from '@typing/Repository';
import React from 'react';
import { Typography, Avatar } from '@mui/material';
import {
    CardContainer,
    CardTitleContainer,
    CardFooter,
} from './RepositoryCard.style';
import { NumberService } from '@services/Number/NumberService';

export interface RepositoryCardProps {
    repository: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
    return (
        <CardContainer>
            <Typography
                gutterBottom
                variant="h3"
                component="a"
                href={repository.url}
                target="_blank"
                rel="noreferrer"
            >
                <CardTitleContainer>
                    <Avatar
                        src={repository.owner.avatarUrl}
                        component={'span'}
                    />
                    {repository.owner.login}/{repository.name}
                </CardTitleContainer>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {repository.description}
            </Typography>

            <CardFooter>
                <Typography variant="body2" color="text.secondary">
                    <i className="fas fa-fw fa-star" />{' '}
                    {NumberService.format(repository.stargazerCount)} stars
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <i className="fas fa-fw fa-utensils" />{' '}
                    {NumberService.format(repository.forkCount)} forks
                </Typography>
            </CardFooter>
        </CardContainer>
    );
};

export default RepositoryCard;
