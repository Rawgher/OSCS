import React, { Component } from "react";
import axios from "axios";
import "../../ESH_style.css";
import "./Categories.css";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";

// TODO: get request to database to access topics for state below

class Categories extends Component {
  state = {
    topics: []
  };

  componentDidMount(){
    axios.get('/api/forum/categories').then(res=>{
      this.setState({topic: res.data});
    }).catch(err=>{
      console.log("this is err=>", err);
    })
  }

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
                {this.state.topics.map(topic => (
                  <tr>
                    <td><a href={`/Forum/${topic._id}`}>{topic.topic_name}</a></td>
                    <td className="ESH_tcol2">{topic.topic_posts}</td>
                    <td>{topic.updatedAt}</td>
                  </tr>
                ))}
              </table>
            </Col>
            <ForumSidebar />
          </Row>
        </Container>
        <Chat />
      </React.Fragment>
    );
  }
}

export default Categories;
