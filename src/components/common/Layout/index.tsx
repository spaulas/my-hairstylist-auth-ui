import React from "react";
import "./layout.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <div className="layout--strip" />
      <section className="layout--box">
        <div className="layout--box-strip" />
        <div className="layout--box-children">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
