import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import LogOut from '../pages/LogOut';
import Form from '../pages/Form';

const App = () => (
  <>
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list" component={List} />
        <Route path="/logout" component={LogOut} />
        <Route path="/form/:id" component={Form} />
      </Switch>
    </main>
  </>
);

export default App;
