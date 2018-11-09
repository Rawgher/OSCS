import React, { Component } from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
import Youtube from "../../components/Youtube";
import Stack from "../../components/Stack";
import axios from "axios";
import youtubeAPI from "../../utils/YoutubeAPI";
import stackAPI from "../../utils/StackAPI";
import googleAPI from "../../utils/GoogleAPI";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import APIMenuList from "../../components/APIMenuList";

class Search extends Component {
  state = {
    search: "",
    googleSearch: [],
    stackResults: [],
    videos: []
  };

  enterPressed = event => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      const youtubeSearch = youtubeAPI.youtubeSearch(this.state.search);

      let result = new Promise((resolve, reject) => {
        resolve(googleAPI.googleSearch(this.state.search));
      });

      // const googleSearch = googleAPI
      //   .googleSearch(this.state.search)
      result.then(res => this.setState({ googleSearch: res }));
      // .then(res => console.log("googlesearch", this.state.googleSearch))
      result.then(res => googleAPI.bingParse(this.state.googleSearch));
      // .catch(err => {
      //   console.log(err);
      // });

      this.getVideos(youtubeSearch);
      // console.log(googleSearch);
      // this.getGoogle(googleSearch);
      const stackSearch = stackAPI.stackSearch(this.state.search);
      this.getStack(stackSearch);

      // const googleSearch = googleAPI.googleSearch(this.state.search);
      // const googleSearch = googleAPI
      //   .googleSearch(this.state.search)
      //   .then(
      //     setTimeout(function(res) {
      //       this.setState({ googleSearch: res }).then(
      //         this.getGoogle(googleSearch)
      //       );
      //     }, 10000)
      //   )
      //   .catch(err => {
      //     console.log(err);
      //   });

      // const https = require("https");
      // const SUBSCRIPTION_KEY = "1e61ef8e51744e889d109185995b9489";
      // if (!SUBSCRIPTION_KEY) {
      //   throw new Error(
      //     "Missing the AZURE_SUBSCRIPTION_KEY environment varable"
      //   );
      // }
      // function bingWebSearch(query) {
      //   https.get(
      //     {
      //       hostname: "api.cognitive.microsoft.com",
      //       path: "/bing/v7.0/search?q=" + encodeURIComponent(query),
      //       headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY }
      //     },
      //     res => {
      //       let body = "";
      //       res.on("data", part => (body += part));
      //       console.log(body);
      //       return body;
      //       res.on("end", () => {
      //         for (var header in res.headers) {
      //           if (
      //             header.startsWith("bingapis-") ||
      //             header.startsWith("x-msedge-")
      //           ) {
      //             console.log(header + ": " + res.headers[header]);
      //           }
      //         }
      //         console.log("\nJSON Response:\n");
      //         console.dir(JSON.parse(body), { colors: false, depth: null });

      //         // let returnBody = JSON.parse(body);
      //         // return returnBody;
      //       });
      //       res.on("error", e => {
      //         console.log("Error: " + e.message);
      //         throw e;
      //       });
      //     }
      //   );
      // }
      // const query = this.state.search;
      // bingWebSearch(query);
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

  getGoogle = googleSearch => {
    axios
      .get(googleSearch)
      .then(res => googleAPI.bingParse(res))
      .then(googleSearch => this.setState({ googleSearch }))
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
        <Container fluid>
          <Background />
          <Row>
            <Col size="md-12">
              <NavTabs auth={this.props.auth} />
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
