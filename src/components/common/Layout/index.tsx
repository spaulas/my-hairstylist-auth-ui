import React from "react";
import "./layout.styles.scss";
import useLayout from "./useLayout.hooks";

const Layout = ({ children }: any) => {
  const { isBackgroundFocused } = useLayout();

  return (
    <div className="layout">
      <div className="layout--strip" />
      <section
        className={`layout--box ${
          isBackgroundFocused ? "layout--box__focused" : ""
        }`}
      >
        <div className="layout--box-strip" />
        <div className="layout--box-children">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
