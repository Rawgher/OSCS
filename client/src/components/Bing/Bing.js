import React from "react";

class Bing extends React.Component {
  render() {
    const { bing } = this.props;

    return bing.map((a, id) => (
      <div>
        <div key={id}>
          <h3>{a.url}</h3>
          <h3>{a.snippet}</h3>
          <h3>{a.name}</h3>
        </div>
      </div>
    ));
  }
}

export default Bing;
