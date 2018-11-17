import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import axios from "axios";
import ForumSidebar from "../../components/Forum-Sidebar";
import "./Posts.css";

class Posts extends Component {
  state = {
    thistopic: [],
    posts: []
  };

  componentDidMount() {
    axios
      .get("/api/forum/replycount/" + this.props.match.params.id)
      .catch(err => {
        console.log("this is err=>", err);
      })
      .then(
        axios
          .get("/api/forum/" + this.props.match.params.id)
          .then(res => {
            this.setState({ posts: res.data });
          })
          .then(() => console.log(this.state.posts))
          .catch(err => {
            console.log("this is err=>", err);
          })
      );

    axios
      .get("/api/forum/catinfo/" + this.props.match.params.id)
      .then(res => {
        this.setState({ thistopic: res.data });
      })
      .catch(err => {
        console.log("this is err=>", err);
      });
  }

  convertDate(theDate) {
    var d = new Date(theDate);
    return d.toLocaleDateString().replace(/\//g, "-");
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
              <h4 className="ESH_main-title">
                TOPIC // {this.state.thistopic.topic_name}
              </h4>
              <div className="ESH_line" />
            </Col>
          </Row>

          <Row>
            <Col size="md-9" className="ESH_forum-col">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr className="ESH_th">
                    <th className="ESH_tcol1">THREAD</th>
                    <th className="ESH_tcol2">REPLIES</th>
                    <th className="ESH_tcol3">FRESHNESS</th>
                  </tr>

                  {/* TODO: find correct keys for mapping */}
                  {this.state.posts.map(post => (
                    <tr>
                      <td>
                        <a href={`/forum/post/${post._id}`}>
                          {post.post_subject}
                        </a>
                      </td>
                      <td className="ESH_tcol2">{post.post_replies}</td>
                      <td>{this.convertDate(post.post_update)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <BackBtn />
            </Col>

            <ForumSidebar loggedIn={this.props.loggedIn} />
          </Row>
        </Container>
        <Chat />
      </React.Fragment>
    );
  }
}

export default Posts;
