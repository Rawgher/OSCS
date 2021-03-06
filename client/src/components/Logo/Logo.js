import React from "react";
import "./Logo.css";
import logo from "./images/BrainOutline.png";

const Logo = props => (
  <div className="EGA-logo-wrapper ">
    <img
      className="EGA-logo-img"
      src={logo}
      alt="Outline of Brain"
      onClick={props.routeToHomePage}
    />
    <h2 className="EGA-logo-h2">One Stop Code Shop</h2>
  </div>
);

export default Logo;
