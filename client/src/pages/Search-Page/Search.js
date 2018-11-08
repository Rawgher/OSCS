import React, { Component } from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
// import API from "../../utils/API";
import Youtube from "../../components/Youtube";
import Stack from "../../components/Stack";
import axios from "axios";
import youtubeAPI from "../../utils/YoutubeAPI";
import stackAPI from "../../utils/StackAPI";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import APIMenuList from "../../components/APIMenuList";
// import YoutubeDivs from '../../components/YoutubeDivs'

class Search extends Component {
  state = {
    search: "",
    stackResults: [],
    videos: []
  };

  enterPressed = event => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      const youtubeSearch = youtubeAPI.youtubeSearch(this.state.search);
      this.getVideos(youtubeSearch);
      const stackSearch = stackAPI.stackSearch(this.state.search);
      this.getStack(stackSearch);
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getVideos = youtubeSearch => {
    axios
      .get(youtubeSearch)
      .then(res => youtubeAPI.youtubeParse(res))
      .then(videos => this.setState({ videos }))
      .catch(err => console.log(err));
  };

  getStack = stackSearch => {
    axios
      .get(stackSearch)
      .then(res => stackAPI.stackParse(res))
      .then(stackResults => this.setState({ stackResults }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <h4 className="EGA-search-logo-title">
          <span className="EGA-orange">ONE STOP</span> CODE SHOP
        </h4>
        <div className="EGA-search-wrapper">
          <Container fluid>
            <Row>
              <Col size="md-12">
                <div className="EGA-searchbar-div">
                  <PrimarySearchAppBar
                    handleInputChange={this.handleInputChange}
                    enterPressed={this.enterPressed}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid>
          <Row>
            <Col size="md-1" />
            <Col size="md-2">
              <div id="EGA-sideTabs">
                <APIMenuList />
              </div>
            </Col>
            <Col size="md-7">
              <div id="EGA-externalPadding">
                <div id="EGA-videoContainer" style={{ minHeight: 10 }}>
                  <Youtube id="test" videos={this.state.videos} />
                  <Stack results={this.state.stackResults} />
                </div>
              </div>
            </Col>
            <Col size="md-2">
              <Sidebar />
              <Chat />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Search;
