import React, { FC } from 'react';
import { Accent } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle } from '../styled/Random';

const Home: FC = () => {
    return (
        <div>
            <StyledTitle>Ready To Type?</StyledTitle>
            <CTA to="/game">
                <Accent>Start</Accent>
            </CTA>
        </div>
    )
}

export default Home
