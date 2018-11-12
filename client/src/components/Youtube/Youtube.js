import React from "react";
import YouTube from "react-youtube";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "./Youtube.css"

// ===== TODO =====
// add function on favorite hover to "Unfavorited"
// add function on unfavorited hover to "Favorite"

class Youtube extends React.Component {
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
          <Button variant="contained" size="large" id="favorite">
            Favorite
            <Icon style={{ marginLeft: 15, color: "#FFFF00" }}>grade</Icon>
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
