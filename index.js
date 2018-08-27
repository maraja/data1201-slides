import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "./app";

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <App />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
