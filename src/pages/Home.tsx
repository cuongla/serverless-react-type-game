import React, { FC } from 'react';
import { Accent } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle } from '../styled/Random';

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
