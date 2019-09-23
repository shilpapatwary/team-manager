import React from "react";
import Header from "./Header";

interface LayoutProps {
    component: any
}
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <section id="content">{props.component}</section>
    </React.Fragment>
  );
};

export default Layout;
