import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Presentation from "./presentation";
import Second from "./presentation/second";
import Introduction from "./presentation/introduction";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/second" component={Second} />
          <Route exact path="/introduction" component={Introduction} />
        </Switch>
      </BrowserRouter>
    );
  }
}
