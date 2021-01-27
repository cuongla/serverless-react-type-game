import React, { FC, useEffect } from 'react';
import { Accent } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle } from '../styled/Random';
import { useAuth0 } from '@auth0/auth0-react';

const Home: FC = () => {
    return (
        <div>
            <StyledTitle>Ready to type?</StyledTitle>
            <CTA to="/game">
                Click or Type '<Accent>s</Accent>' to start playing
            </CTA>
        </div>
    )
}

export default Home
