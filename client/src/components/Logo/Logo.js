import React from "react";
import "./Logo.css";
import logo from "./images/BrainOutline.png";

const Logo = () => (
  <div className="container">
    <div className="logoWrapper ">
      <span>&#123;</span>
      <img src={logo} alt="Outline of Brain" />
      <span>&#125;</span>
      <h2>One Stop Code Shop</h2>
    </div>
  </div>
);

export default Logo;
