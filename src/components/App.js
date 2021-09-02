import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import Form from '../pages/Form';
import Record from '../pages/Record';
import SignUp from '../pages/SignUp';

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={SignUp} />
      <Route path="/list" component={List} />
      <Route path="/form/:id" component={Form} />
      <Route path="/records" component={Record} />
    </Switch>
  </HashRouter>
);

export default App;
