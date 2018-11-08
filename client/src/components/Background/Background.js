import React, { Component } from "react";
import "./Background.css";
import background from "../../images/background.png";

class DocumentationPage extends Component {
  render() {
    return (
      <div className="EGA-background-image">
        <img src={background} className="EGA-stretch" alt="Grey Background" />
      </div>
    );
  }
}

export default DocumentationPage;
