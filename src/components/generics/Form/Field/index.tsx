import React from "react";
import FormError from "../Error";
import "./field.styles.scss";

const FormField = ({
  label,
  errorMessage,
  onChange,
  value,
  type,
  hasError,
  setIsFocused,
  isFocused,
}: any) => {
  const isLabelOnTop = isFocused || value;

  return (
    <>
      <div className="form--item">
        <p
          className={`form--label ${
            isLabelOnTop ? "form--label__focused" : ""
          }`}
        >
          {label}
        </p>
        <input
          type={type}
          name={type}
          id={type}
          className={`form--input ${
            isLabelOnTop ? "form--input__focused" : ""
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
        />
        <FormError showError={hasError} message={errorMessage} />
      </div>
    </>
  );
};

export default FormField;
