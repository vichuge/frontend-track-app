import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import LogOut from '../pages/LogOut';

const App = () => (
  <>
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list" component={List} />
        <Route path="/logout" component={LogOut} />
      </Switch>
    </main>
  </>
);

export default App;
