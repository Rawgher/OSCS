import React, { Component } from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
import background from "./images/background.png";
import NavTabs from "../../components/Nav";
// import API from "../../utils/API";
import Youtube from "../../components/Youtube";
import axios from "axios";
import youtubeAPI from "../../utils/YoutubeAPI";
import stackAPI from "../../utils/StackAPI";
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
      const youtubeSearch = youtubeAPI.youtubeSearch(this.state.search)
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
      .catch(err => console.log (err));
  };

  render() {
    return (
      <React.Fragment>
        <NavTabs />
        <h2 className="EGA-search-logo-title">ONE STOP CODE SHOP</h2>
        <div className="EGA-search-wrapper">
          <div className="EGA-background-image">
            <img
              src={background}
              className="EGA-stretch"
              alt="Grey Background"
            />
          </div>
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
        <Youtube videos={this.state.videos} />
      </React.Fragment>
    );
  }
}

export default Search;
