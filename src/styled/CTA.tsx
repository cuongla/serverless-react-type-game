import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CTA = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    display: block;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: var(--accent-color);
    }
`;