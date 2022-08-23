import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Routing from "@config/Routing";
import { Props } from "./types";

const App = ({ history }: Props): React.ReactElement => {
  console.log("------------------");
  console.log("store = ", store.getState());
  console.log("persistor = ", persistor);
  return (
    <Provider store={store}>
        <HistoryRouter history={history}>
          <Routing />
        </HistoryRouter>
    </Provider>
  );
};

export default App;
