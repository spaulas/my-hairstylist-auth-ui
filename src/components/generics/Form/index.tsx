import React, { useEffect, useState } from "react";
import "./form.styles.scss";
import Button from "@components/common/Button";
import useLayout from "@components/common/Layout/useLayout.hooks";

const Form = ({ children, handleSubmit, buttonTitle }: any) => {
  const { isBackgroundFocused, setBackgroundFocus } = useLayout();

  const [isFocused, setIsFocused] = useState({});

  const isAnyFocused: any = Object.values(isFocused).find((e) => e);

  useEffect(() => {
    if (isAnyFocused !== isBackgroundFocused) {
      setBackgroundFocus(isAnyFocused);
    }
  }, [isFocused]);

  return (
    <div className="signIn">
      <h1 className={`title ${isAnyFocused ? "title__focused" : ""}`}>
        My Hairstylist
      </h1>
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
