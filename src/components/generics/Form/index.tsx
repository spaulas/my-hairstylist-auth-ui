import React, { useEffect, useState } from "react";
import "./form.styles.scss";
import Button from "@components/common/Button";
import Link from "@components/common/Link";
import useLayout from "@components/common/Layout/useLayout/index.hooks";

const Form = ({
  children,
  handleSubmit,
  buttonTitle,
  showForgotPassword,
  link: { message, title, url },
}: any) => {
  const { isBackgroundFocused, setBackgroundFocus } = useLayout();

  const [isFocused, setIsFocused] = useState({});

  const isAnyFocused: any = Object.values(isFocused).find((e) => e);

  useEffect(() => {
    if (isAnyFocused !== isBackgroundFocused) {
      setBackgroundFocus(isAnyFocused);
    }
  }, [isFocused]);

  return (
    <div className="form">
      <h1
        className={`form--title ${isAnyFocused ? "form--title__focused" : ""}`}
      >
        My Hairstylist
      </h1>
      {children(isFocused, setIsFocused)}
      <Button onClick={handleSubmit} title={buttonTitle} type="primary" />
      {showForgotPassword ? (
        <Link
          className="form--links-forgot-password"
          title="Forgot your password?"
        />
      ) : null}
      <p className="form--links-sign-up">
        {message} &nbsp;
        <Link url={url} title={title} />
      </p>
    </div>
  );
};

export default Form;
