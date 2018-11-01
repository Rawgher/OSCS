import React, { Component } from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
import background from "./images/background.png";
import NavTabs from "../../components/Nav";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    stackResults: []
  };
  enterPressed = event => {
    // event.preventDefault();
    var code = event.keyCode || event.which;
    if (code === 13) {
      console.log("Hello");
      API.getStack(this.state.search).then( res => this.setState({ stackResults: res }));
      console.log(this.state.stackResults);
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
      </React.Fragment>
    );
  }
}

export default Search;
