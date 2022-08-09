import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Main from "./components/Main/Main";

export default ({ history }: { history: any }): React.ReactElement => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};
