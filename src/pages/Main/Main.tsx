import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      THIS IS THE MAIN AUTH COMPONENT
      <button onClick={() => navigate("/auth/sign-in")}>Sign in</button>
      <button onClick={() => navigate("/auth/sign-up")}>Sign up</button>
    </div>
  );
};
export default Main;
