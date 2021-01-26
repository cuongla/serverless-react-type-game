import React, { FC, useState, useEffect, useContext } from 'react';
import { useScore } from '../context/ScoreContext';
import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';

const GameOver: FC = () => {
    // context
    const { score } = useScore();
    const [scoreMessage, setScoreMessage] = useState('');

    useEffect(() => {
        saveHighScore();
    }, [score]);

    // saving scores
    const saveHighScore = async () => {
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({ name: 'asdasfsd', score }),
            };
            const res = await fetch(
                '/.netlify/functions/saveHighScore',
                options
            );
            const data = await res.json();
            console.log(data);
            if (data.id) {
                setScoreMessage('Congrats! You got a high score!!');
            } else {
                setScoreMessage('Sorry, not a high score. Keep trying!');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Game Over</h1>
            <h2>{scoreMessage}</h2>

            <StyledCharacter>{score}</StyledCharacter>
            <div>
                <StyledLink to="/">Go Home</StyledLink>
            </div>
            <div>
                <StyledLink to="/game">Play Again</StyledLink>
            </div>
        </div>
    );
}

export default GameOver;