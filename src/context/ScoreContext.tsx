import React, { createContext, FC, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface ScoreProviderProps {
    children: ReactNode
}

type ScoreContextProps = {
    score: number
    setScore: Dispatch<SetStateAction<number>> 
}

// @ts-ignore
const ScoreContext = createContext({} as ScoreContextProps);

const ScoreProvider: FC<ScoreProviderProps> = ({ children }) => {
    const [score, setScore] = useState<number>(0);

    return(
        <ScoreContext.Provider value={{ score,setScore }}>
            {children}
        </ScoreContext.Provider>
    )
}

export { ScoreProvider, ScoreContext }