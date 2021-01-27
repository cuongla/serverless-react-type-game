import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledNavItems,
    StyledNavbar,
    StyledNavBrand,
    StyledLink,
} from '../styled/Navbar';
import { Accent } from '../styled/Random';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar: FC = () => {
    const { isAuthenticated, loginWithRedirect, logout
    } = useAuth0();

    return (
        <StyledNavbar>
            <StyledNavBrand className="nav__brand">
                <Link to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/highScores">High Scores</StyledLink>
                </li>
                {!isAuthenticated && (
                    <li>
                        <button onClick={() => loginWithRedirect()}>Log In</button>

                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <button onClick={() => logout({ returnTo: window.location.origin })}>
                            Log Out
                        </button>
                    </li>
                )}
            </StyledNavItems>
        </StyledNavbar>
    );
}

export default Navbar;