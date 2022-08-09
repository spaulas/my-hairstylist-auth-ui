import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./components/Main/Main";

export default ({ history }: { history: any }): React.ReactElement => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/auth/sign-in" component={SignIn} />
        <Route exact path="/auth/sign-up" component={SignUp} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};
