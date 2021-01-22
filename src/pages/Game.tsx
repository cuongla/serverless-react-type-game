import React, { FC } from 'react';
import {
    StyledGame,
    StyledCharacter,
    StyledScore,
    StyledTimer,
} from '../styled/Game';
import { Strong } from '../styled/Random';

const Game: FC = () => {
    return (
        <StyledGame>
            <StyledScore>
                Score: <Strong>0</Strong>
            </StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>
                Time: <Strong>00:000</Strong>
            </StyledTimer>
        </StyledGame>
    )
}

export default Game;
