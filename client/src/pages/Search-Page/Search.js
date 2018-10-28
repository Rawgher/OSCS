import React from "react";
import "./Search.css";
import PrimarySearchAppBar from "../../components/SearchBar";
import { Col, Row, Container } from "../../components/Grid";
import background from "./images/background.png";
import Nav from "../../components/Nav";
// import NavTabs from "../../components/Nav";

const Search = () => (
  <div className="EGA-search-wrapper">
    <div className="EGA-background-image">
      <img src={background} className="stretch" alt="Grey Background" />
    </div>
    <Nav />
    {/* <NavTabs /> */}
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div className="EGA-searchbar-div">
            <PrimarySearchAppBar />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Search;
