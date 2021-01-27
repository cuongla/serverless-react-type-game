import React, { FC, useState, useEffect } from 'react';
import { useScore } from '../context/ScoreContext';
import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';
import { StyledTitle } from '../styled/Random';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const GameOver: FC = () => {
    const history = useHistory();
    // uaht0
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const { score } = useScore();
    const [scoreMessage, setScoreMessage] = useState('');

    // return to home
    // if score is below 0
    if (score === -1) {
        history.push('/');
    }

    useEffect(() => {
        // save high score is its valid authentication
        isAuthenticated && saveHighScore();
    }, [score, isAuthenticated]);

    // saving scores
    const saveHighScore = async () => {
        try {
            const token = await getAccessTokenSilently();
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    name: 'asdasfsd',
                    score,
                }),
                headers: {
                    authorization: `Bearer ${token}`,
                },
            };
            const res = await fetch(
                '/.netlify/functions/saveHighScore',
                options
            );
            const data = await res.json();
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
            <StyledTitle>Game Over</StyledTitle>
            <h2>{scoreMessage}</h2>
            {!isAuthenticated && <h2>You should login or sign up to compete for high score</h2>}
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