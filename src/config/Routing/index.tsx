import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import Main from "@pages/Main/Main";
import useLayout from "@components/common/Layout/useLayout/index.hooks";
import "@app/app.styles.scss";


const Routing = (): React.ReactElement => {
  const { isBackgroundFocused } = useLayout();

  return (
    <div className={`app ${isBackgroundFocused ? "app__focused" : ""}`}>
      <Routes>
        <Route path="/auth" element={<Main />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default Routing;
