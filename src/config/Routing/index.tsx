import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import Main from "@pages/Main/Main";

const Routing = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/auth" element={<Main />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Routing;
