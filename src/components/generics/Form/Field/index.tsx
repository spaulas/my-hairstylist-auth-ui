import React, { useState } from "react";
import "./field.scss";

const FormField = ({
  label,
  onChange,
  value,
  type,
  setIsFocused,
  isFocused,
}: any) => {
  const isLabelOnTop = isFocused || value;

  return (
    <>
      <div className="form--item">
        <p
          className={`form--label ${isLabelOnTop ? "form--label-focused" : ""}`}
        >
          {label}
        </p>
        <input
          type={type}
          name={type}
          id={type}
          className={`form--input ${isLabelOnTop ? "form--input-focused" : ""}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default FormField;
