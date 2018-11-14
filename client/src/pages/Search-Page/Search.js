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

// roger - neeed to make a function specific for what happens to youtube since its showing first
// second function for otehr ones that will show only when clicked and toggle from there
class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: "",
    bingSearch: [],
    stackResults: [],
    videos: [],
    youtubeshown: true,
    stackshown: true,
    bingshown: true,
    allshown: true
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

  toggleAll = () => {
    this.state.youtubeshown === true
      ? this.setState({ youtubeshown: false })
      : this.setState({ youtubeshown: true });
    this.state.stackshown === true
      ? this.setState({ stackshown: false })
      : this.setState({ stackshown: false });
    this.state.bingshown === true
      ? this.setState({ bingshown: false })
      : this.setState({ bingshown: true });
  };

  toggleYoutube = () => {
    if (this.state.stackshown === true) {
      this.setState({ stackshown: false });
    }
    if (this.state.bingshown === true) {
      this.setState({ bingshown: false });
    }
    this.setState({
      youtubeshown: !this.state.youtubeshown
    });
  };

  toggleStack = () => {
    if (this.state.youtubeshown === true) {
      this.setState({ youtubeshown: false });
    }
    if (this.state.bingshown === true) {
      this.setState({ bingshown: false });
    }
    this.setState({
      stackshown: !this.state.stackshown
    });
  };

  toggleBing = () => {
    if (this.state.youtubeshown === true) {
      this.setState({ youtubeshown: false });
    }
    if (this.state.stackshown === true) {
      this.setState({ stackshown: false });
    }
    this.setState({
      bingshown: !this.state.bingshown
    });
  };

  render() {
    let allShown = {
      display: this.state.allShown ? "block" : "none"
    };

    let youshown = {
      display: this.state.youtubeshown ? "block" : "none"
    };

    let stackshown = {
      display: this.state.stackshown ? "block" : "none"
    };

    let bingshown = {
      display: this.state.bingshown ? "block" : "none"
    };

    if (this.props.loggedIn === true) {
      console.log("logged in");
    }
    return (
      <React.Fragment>
        <Container fluid>
          <Background />
          <Row>
            <Col size="md-12">
              <NavTabs />
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
                <APIMenuList
                  toggleYoutube={this.toggleYoutube}
                  toggleStack={this.toggleStack}
                  toggleBing={this.toggleBing}
                  toggleAll={this.toggleAll}
                />
              </div>
            </Col>
            <Col size="md-7">
              <div id="EGA-externalPadding">
                <div id="EGA-videoContainer" style={{ minHeight: 10 }}>
                  <div className="RDPyoutubeDiv" style={youshown}>
                    <Youtube id="test" videos={this.state.videos} />
                  </div>
                  <div className="RDPstackDiv" style={stackshown}>
                    <Stack results={this.state.stackResults} />
                  </div>
                  <div className="RDPbingDiv" style={bingshown}>
                    <Bing bing={this.state.bingSearch} />
                  </div>
                </div>
              </div>
            </Col>
            <Col size="md-2">
              <Sidebar user={this.props.user} />
              <Chat />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Search;
