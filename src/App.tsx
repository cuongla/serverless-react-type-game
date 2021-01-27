import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'

// Pages 
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';

// Components
import Navbar from './components/Navbar';

// Styles
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import { GlobalStyle } from './styled/Global';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { lightTheme, darkTheme } from './styled/Themes';


const App: FC = () => {
  const { isLoading } = useAuth0();
  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Main>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <Container>
              <Navbar toggleTheme={toggleTheme} />
              <Switch>
                <Route path="/game" component={Game} />
                <Route
                  path="/highScores"
                  component={HighScores}
                />
                <Route path="/gameOver" component={GameOver} />
                <Route path="/" component={Home} />
              </Switch>
            </Container>
          )}
        </Main>
      </ThemeProvider>
    </Router>
  )
}

export default App
