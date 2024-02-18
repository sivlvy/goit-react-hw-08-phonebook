import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
    display: flex;
    gap: 20px;
    padding: 0;
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 0;
`;

export const ListLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    color: #2a363b;

    &.active {
        color: #e84a5f;
    }
`;
