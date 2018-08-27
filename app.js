import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Presentation from './presentation';
import Second from './presentation/second';
import Module1 from './presentation/module1';
import Module2 from './presentation/module2';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/second" component={Second} />
          <Route exact path="/module1" component={Module1} />
          <Route exact path="/module2" component={Module2} />
        </Switch>
      </BrowserRouter>
    );
  }
}
