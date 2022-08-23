import React, { useState } from "react";
import "./form.scss";
import Button from "@components/common/Button";

const Form = ({ children, handleSubmit, buttonTitle }: any) => {
  const [isFocused, setIsFocused] = useState({});

  /*  const isAnyFocused = () => Object.values(isFocused).find((e) => e); */

  return (
    <div className="signIn">
      <h1 className={`title ${true ? "title-focused" : ""}`}>My Hairstylist</h1>
      {children(isFocused, setIsFocused)}
      <Button onClick={handleSubmit} title={buttonTitle} type="primary" />
      <a className="link--forgot-password">Forgot your password?</a>
      <p className="link--forgot-password">
        Don't have an account? <a href="/auth/sign-up">Sign up</a>
      </p>
    </div>
  );
};

export default Form;
