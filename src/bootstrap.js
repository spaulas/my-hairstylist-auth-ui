import React from "react";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  console.log("AUTH MOUNT FUNCTION CALL!");
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(() => onNavigate(history.location));
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ location: { pathname: nextPathname } }) => {
      const { pathname } = history.location;

      if (nextPathname !== pathname) {
        history.push(nextPathname);
      }
    },
  };
};

const unmount = () => {
  console.log("unmount");
  ReactDOM.render(<div />);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#auth-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount, unmount };
