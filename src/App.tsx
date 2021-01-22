import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages 
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';

// Components
import Navbar from './components/Navbar';

// Styles
import { GlobalStyle } from './styled/Global';
import { Container } from './styled/Container';
import { Main } from './styled/Main';

const App: FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highScores" component={HighScores} />
            <Route path="/gameOver" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </Router>

  )
}

export default App
