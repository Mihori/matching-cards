import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Game from '../Pages/Game/Game';
import Home from '../Pages/Home/Home';
import NavBar from './NavBar';


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game' component={Game} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </>
  );
};

export default App;
