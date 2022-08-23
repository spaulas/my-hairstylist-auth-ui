import React from "react";
import "./link.styles.scss";

const Link = ({ url, title, className = "" }: any) => {
  return (
    <a className={`link ${className}`} href={url}>
      {title}
    </a>
  );
};

export default Link;
