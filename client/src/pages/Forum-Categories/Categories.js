import React, { Component } from "react";
import axios from "axios";
import "../../ESH_style.css";
import "./Categories.css";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";

class Categories extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    axios
      .get("api/forum/topiccount")
      .catch(err => {
        console.log("this is err=>", err);
      })
      .then(
        axios
          .get("/api/forum/categories")
          .then(res => {
            this.setState({ topics: res.data });
          })
          .catch(err => {
            console.log("this is err=>", err);
          })
      )
  }

  convertDate(theDate) {
    var d = new Date(theDate);
    return d.toLocaleDateString().replace(/\//g, '-');
  }

  render() {
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
        <Container>
          <Row>
            <Col size="md-12">
              <h4 className="ESH_main-title">FORUMS</h4>
              <div className="ESH_line" />
            </Col>
          </Row>
          <Row>
            <Col size="md-9" className="ESH_forum-col">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr className="th">
                    <th className="ESH_tcol1">TOPICS</th>
                    <th className="ESH_tcol2">POSTS</th>
                    <th className="ESH_tcol3">FRESHNESS</th>
                  </tr>

                  {this.state.topics.map(topic => (
                    <tr>
                      <td>
                        <a href={`/forum/${topic._id}`}>{topic.topic_name}</a>
                        <br />
                        {topic.topic_description}
                      </td>
                      <td className="ESH_tcol2">{topic.topic_posts}</td>
                      <td>{this.convertDate(topic.topic_update)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
            <ForumSidebar loggedIn={this.props.loggedIn} />
          </Row>
        </Container>
        <Chat />
      </React.Fragment >
    );
  }
}

export default Categories;
