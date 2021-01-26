import React, { FC, useEffect, useState, useCallback } from 'react';
import {
    StyledGame,
    StyledCharacter,
    StyledScore,
    StyledTimer,
} from '../styled/Game';
import { useHistory } from 'react-router-dom';

// styles
import { Strong } from '../styled/Random';

// context
import { useScore } from '../context/ScoreContext';

const Game: FC = () => {
    const history = useHistory();
    const MAX_SECONDS = 10;
    // context
    const { score, setScore } = useScore();
    // state
    const [ms, setMs] = useState<number | string>(999);
    const [seconds, setSeconds] = useState<number | string>(MAX_SECONDS);
    const [currentCharacter, setCurrentCharacter] = useState<string>('');
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // start the game
    useEffect(() => {
        setRandomCharacter();
        setScore(0)
        const currentTime = new Date();
        const interval = setInterval(() => updateTime(currentTime), 1);
        return () => {
            clearInterval(interval);
        };
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [setScore]);

    // generate random characters
    const setRandomCharacter = () => {
        const randomInt = Math.floor(Math.random() * 36);
        setCurrentCharacter(characters[randomInt]);
    };

    // set time
    const updateTime = (startTime: Date) => {
        const endTime = new Date();
        const msPassedStr = (
            endTime.getTime() - startTime.getTime()
        ).toString();
        //add zeros if necessary to ensure the string has exactly 5 characters
        const formattedMSString = ('0000' + msPassedStr).slice(-5);
        //0000 - first 2 are the seconds, and the last 3 are the ms
        const updatedSeconds =
            MAX_SECONDS - parseInt(formattedMSString.substring(0, 2)) - 1;
        const updatedMs =
            1000 -
            parseInt(formattedMSString.substring(formattedMSString.length - 3));
        setSeconds(addLeadingZeros(updatedSeconds, 2));
        setMs(addLeadingZeros(updatedMs, 3));
    };

    // game over
    useEffect(() => {
        if (seconds <= -1) {
            //Todo: save the score
            history.push('/gameOver');
        }
    }, [seconds, ms, history]);

    // update score if correct character is entered
    const keyUpHandler = useCallback(
        (e) => {
            if (e.key === currentCharacter) {
                setScore((prevScore: number) => prevScore + 1);
            } else {
                if (score > 0) {
                    setScore((prevScore: number) => prevScore - 1);
                }
            }
            setRandomCharacter();
        },
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        [currentCharacter, score]
    );

    // update key action 
    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, [keyUpHandler]);


    const addLeadingZeros = (str: any, length: number) => {
        let zeros = '';
        for (let i = 0; i < length; i++) {
            zeros += '0';
        }
        return (zeros + str).slice(-length);
    };

    return (
        <StyledGame>
            <StyledScore>
                Score: <Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>{currentCharacter}</StyledCharacter>
            <StyledTimer>
                Time:{' '}
                <Strong>
                    {seconds}:{ms}
                </Strong>
            </StyledTimer>
        </StyledGame>
    )
}

export default Game;
