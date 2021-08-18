import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
// import Stats from '../containers/Stats';

const App = () => (
  <>
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  </>
);

export default App;
