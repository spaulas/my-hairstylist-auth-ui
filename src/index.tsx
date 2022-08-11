import React from "react";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (
  el: ReactDOM.Container | null,
  { onNavigate, defaultHistory, initialPath }: any
) => {
  console.log("AUTH MOUNT FUNCTION CALL!");
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(() => onNavigate(history.location));
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({
      location: { pathname: nextPathname },
    }: {
      location: { pathname: string };
    }) => {
      const { pathname } = history.location;

      if (nextPathname !== pathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#auth-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
