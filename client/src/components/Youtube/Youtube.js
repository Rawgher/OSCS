import React from "react";
import YouTube from "react-youtube";
import { Button } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import "./Youtube.css";

class Youtube extends React.Component {
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
    const opts = {
      // height: "390",
      // width: "640",
      width: "100%",
      maxWidth: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const { videos } = this.props;
    return videos.map((a, id) => (
      <div key={id}>
        <YouTube videoId={a.videoId} opts={opts} onReady={this._onReady} />
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
          </Button>
        </div>  
      </div>
    ));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();

    var tabs = document.getElementById("EGA-sideTabs");
    tabs.style.display = "block";

    var element = document.getElementById("EGA-videoContainer");
    element.style.display = "block";
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}

export default Youtube;
