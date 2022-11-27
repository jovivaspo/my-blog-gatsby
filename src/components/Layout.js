/*MODULES*/
import React from "react";

/*COMPONENTS*/
import Navbar from "./navbar";
import Footer from "./footer";

/*CSS*/
import "../assets/css/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
