import React from "react";
import "./error.styles.scss"

const FormError = ({ showError, message }: any) => {
  return (
    <p className={`error ${showError ? "error__visible" : ""}`}>{message}</p>
  );
};

export default FormError;
