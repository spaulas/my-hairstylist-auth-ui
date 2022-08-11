import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./components/Main/Main";

export default ({ history }: { history: any }): React.ReactElement => {
  console.log("APP auth");
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/auth" element={<Main />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
      </Routes>
    </HistoryRouter>
  );
};
