import React from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Routing from "@config/Routing";
import { Props } from "./types";

const App = ({ history }: Props): React.ReactElement => {
  return (
    <HistoryRouter history={history}>
      <Routing />
    </HistoryRouter>
  );
};

export default App;
