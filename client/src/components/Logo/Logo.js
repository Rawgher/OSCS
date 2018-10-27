import React from "react";
import "./Logo.css";
// added import of image -RDP
import logo from "./images/BrainOutline.png";

const Logo = () => (
  <div className="logoWrapper container">
    {/* calling import to make image show -RDP */}
    <img src={logo} alt="Outline of Brain" />
  </div>
);

export default Logo;
