import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages';
import LessionsPage from './lessions';
import LearnUseState from './lessions/learn-use-state';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/learn" component={LessionsPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
