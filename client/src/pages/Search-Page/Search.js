import React, { Component } from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
import Youtube from "../../components/Youtube";
import Stack from "../../components/Stack";
import axios from "axios";
import youtubeAPI from "../../utils/YoutubeAPI";
import stackAPI from "../../utils/StackAPI";
import bingAPI from "../../utils/BingAPI";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import APIMenuList from "../../components/APIMenuList";
import Bing from "../../components/Bing";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: "",
    bingSearch: [],
    stackResults: [],
    videos: []
  };

  enterPressed = event => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      const youtubeSearch = youtubeAPI.youtubeSearch(this.state.search);
      this.bingSearch(this.state.search);
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

  bingSearch = search => {
    bingAPI
      .bingSearch(search)
      .then(res => bingAPI.bingParse(res))
      .then(bingSearch => this.setState({ bingSearch }))
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
    if (this.props.loggedIn === true) {
      console.log("logged in");
    }
    return (
      <React.Fragment>
        <Container fluid>
          <Background />
          <Row>
            <Col size="md-12">
              <NavTabs
                updateUser={this.props.updateUser}
                loggedIn={this.props.loggedIn}
                username={this.props.username}
              />
            </Col>
          </Row>
        </Container>
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
          {/* <h3>{this.props.user}</h3>
          <h3>{this.props.user_id}</h3> */}
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
                  <Bing bing={this.state.bingSearch} />
                </div>
              </div>
            </Col>
            <Col size="md-2">
              <Sidebar username={this.props.username} />
              <Chat />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Search;
