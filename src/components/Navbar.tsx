import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledNavItems,
    StyledNavbar,
    StyledNavBrand,
    StyledLink,
    StyledButtonLink
} from '../styled/Navbar';
import { StyledButton } from '../styled/Buttons';
import { Accent } from '../styled/Random';
import { useAuth0 } from "@auth0/auth0-react";

interface NavbarProps {
    toggleTheme: any
}

const Navbar: FC<NavbarProps> = ({ toggleTheme }) => {
    const { isAuthenticated, loginWithRedirect, logout
    } = useAuth0();

    return (
        <StyledNavbar>
            <StyledNavBrand className="nav__brand">
                <Link to="/">
                    Typing.<Accent>Game.</Accent>
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
                        <StyledButtonLink onClick={() => loginWithRedirect()}>Log In</StyledButtonLink>

                    </li>
                )}
                {isAuthenticated && (
                    <li>
                        <StyledButtonLink onClick={() => logout({ returnTo: window.location.origin })}>
                            Log Out
                        </StyledButtonLink>
                    </li>
                )}
                <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
            </StyledNavItems>
        </StyledNavbar>
    );
}

export default Navbar;