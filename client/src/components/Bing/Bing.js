import React from "react";
import "./Bing.css";
import { Button, IconButton } from "@material-ui/core";
import { Star } from "@material-ui/icons";

class Bing extends React.Component {
  state = {
    disabled: true,
    favorited: false
  };

  componentDidMount() {
    if (this.props.loggedIn === true) {
      this.setState({ disabled: false });
    }
  }

  favoriteThis() {
    this.setState({
      favorited: !this.state.favorited
    });
  }

  renderText() {
    var text = (this.state.favorited) ? "Favorited" : "Favorite";

    return [
      text,
      <Star />
    ];
  }

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
          <p className="RDPwhiteText">{a.snippet}</p>
          <div class="fav-div">
            <Button
              aria-label="Add to favorites"
              variant="contained"
              size="large"
              id="favorite"
              disabled={this.state.disabled}
              disableRipple={this.state.disabled}
              onClick={this.favoriteThis}
            >
              {this.renderText()}
            >
            </Button>
          </div>
        </div>
      </div>
    ));
  }
}

export default Bing;
