import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import _ from 'lodash';

import Game from '../Pages/Game/Game';
import Home from '../Pages/Home/Home';
import { setAppState, initialState } from './appStore';
import NavBar from './NavBar';

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state);

  const isAppStateInitial = _.isEqual(appState, initialState());

  if (isAppStateInitial) {
    const appStateFromLocalStorage = JSON.parse(window.localStorage.getItem('memoryGameState'));
    dispatch(setAppState(appStateFromLocalStorage));
  }

  return (
    <Router>
      <NavBar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game' component={Game} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
