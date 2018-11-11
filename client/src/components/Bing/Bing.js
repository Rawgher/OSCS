import React from "react";
import "./Bing.css";

class Bing extends React.Component {
  render() {
    const { bing } = this.props;

    // make text white, name is a clickable link, add bottom white border
    // make title orange on hover
    return bing.map((a, id) => (
      <div className="RDPleftAlign">
        <div key={id} className="RDPwhiteBorder">
          <a href={a.url} target="_blank" rel="noreferrer noopener">
            <p className="RDPwhiteText RDPhoverLink RDPtitleSize RDPpaddingTop">
              {a.name}
            </p>
          </a>
          <p className="RDPwhiteText RDPpaddingBot">{a.snippet}</p>
        </div>
      </div>
    ));
  }
}

export default Bing;
