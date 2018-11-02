import React, { Component } from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
import background from "./images/background.png";
import NavTabs from "../../components/Nav";
import Youtube from "../../components/Youtube";
import axios from "axios";
import youtubeAPI from "../../utils/YoutubeAPI";
import Sidebar from "../../components/Sidebar";
import APIMenuList from "../../components/APIMenuList";
// import YoutubeDivs from '../../components/YoutubeDivs'

class Search extends Component {
  state = {
    search: "",
    videos: []
  };

  enterPressed = event => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      const youtubeSearch = youtubeAPI.youtubeSearch(this.state.search);
      this.getVideos(youtubeSearch);
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

  render() {
    return (
      <React.Fragment>
        <NavTabs />
        <h2 className="EGA-search-logo-title">ONE STOP CODE SHOP</h2>
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
                </div>
              </div>
            </Col>
            <Col size="md-2">
              <div className="EGA-background-image">
                <img
                  src={background}
                  className="EGA-stretch"
                  alt="Grey Background"
                />
                <Sidebar />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Search;
