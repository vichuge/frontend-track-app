import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';

const App = () => (
  <>
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list" component={List} />
      </Switch>
    </main>
  </>
);

export default App;
