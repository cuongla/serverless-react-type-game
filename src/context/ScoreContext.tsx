import React, { FC, ReactNode. useState, useContext } from 'react';

// types
interface ScoreProviderProps {
    children: ReactNode
}

// setup scores
const ScoreContext = React.createContext(-1);
const userScore = (ScoreContext: any) => useContext<any>(ScoreContext);

const ScoreProvider: FC<ScoreProviderProps> = ({ children }) => {
    const [score, setScore] = useState<number>(-1);
    return (
        // @ts-ignore
        <ScoreContext.Provider value={[score, setScore]}>
            {children}
        </ScoreContext.Provider>
    )
}

export { ScoreProvider, userScore };

