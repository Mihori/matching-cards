import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createStore } from 'redux';

import Game from '../Pages/Game/Game';
import Home from '../Pages/Home/Home';
import appStore from './appStore';
import NavBar from './NavBar';

const store = createStore(appStore);

const App = () => {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
};

export default App;
