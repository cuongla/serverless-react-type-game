import React, { FC, ReactNode, useState, useContext, Dispatch, SetStateAction } from 'react';

// types
interface ScoreProviderProps {
    children: ReactNode
}

type ScoreContextType = {
    score: number
    setScore: Dispatch<SetStateAction<number>>
}

const ScoreContextValue: ScoreContextType = {
    score: -1,
    setScore: state => {}
}

// setup scores
const ScoreContext = React.createContext(ScoreContextValue);
const useScore = () => useContext(ScoreContext);

const ScoreProvider: FC<ScoreProviderProps> = ({ children }) => {
    const [score, setScore] = useState<any>(-1);

    return (
        // @ts-ignore
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    )
}

export { ScoreProvider, useScore };

