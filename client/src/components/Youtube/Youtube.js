import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { videos } = this.props;
    return videos.map((a, id) => (
      <div key={id}>
        <YouTube
          videoId={a.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    ));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube