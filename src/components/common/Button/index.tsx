import React from "react";
import "./button.scss";

const Button = ({ title, onClick, type }: any) => {
  return (
    <button className={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
