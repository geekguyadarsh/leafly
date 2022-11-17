import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Signin from "../Signin/Signin";

const Base = ({ homepage, className, children }) => {
  return (
    <div className="base">
      <NavBar homepage={homepage} />
      <Signin />
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
};
export default Base;
