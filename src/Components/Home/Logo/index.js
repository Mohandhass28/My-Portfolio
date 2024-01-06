import React from "react";
import SideLogo from "../../../assets/images/m-high-resolution-logo-transparent.png";

const Logo = () => {
  return (
    <div className="side-image">
      <img src={SideLogo} alt="SideLogo" className="image" />
    </div>
  );
};

export default Logo;
