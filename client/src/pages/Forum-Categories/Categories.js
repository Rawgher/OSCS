import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import "../../ESH_style.css";
import "./Categories.css";

class Categories extends Component {
  // state = {
  //   topics
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-9">
            <h3 className="ESH_main-title">FORUMS</h3>
            <div className="ESH_line"></div>
          </Col>
        </Row>
        <Row className="ESH_forum-col">
          <Col size="md-9">
            <table style={{ width: "100%" }}>
              <tr className="th">
                <th className="ESH_tcol1">TOPICS</th>
                <th className="ESH_tcol2">POSTS</th>
                <th className="ESH_tcol3">FRESHNESS</th>
              </tr>
              <tr>
                <td>topic here adkfjasdfij alksdjfaoids fladkjf </td>
                <td className="ESH_tcol2">20</td>
                <td>11/3/2018</td>
              </tr>
              {/* TODO: find correct keys for mapping */}
              {/* {this.state.topics.map(topic => (
                <tr>
                  <td><a href={`/Forum/${topic._id}`}>{topic.topic}</a></td>
                  <td className="ESH_tcol2">{topic.postNum}</td>
                  <td>{topic.updatedAt}</td>
                </tr>
              ))} */}
            </table>
          </Col>
          <ForumSidebar />
        </Row>
      </Container>
    );
  };
};

export default Categories;
