import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../../components/Sidebar";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import axios from "axios";
import "./Posts.css";

// TODO: change topic state to topic user clicks on

class Posts extends Component {
  state = {
    thistopic: [],
    posts: []
  };

  componentDidMount() {
    axios
      .get("/api/forum/" + this.props.match.params.id)
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log("this is err=>", err);
      });

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
  return d.toLocaleDateString().replace(/\//g,'-');
}

  render() {
    return (
      <Grid container>
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
        <Grid item xs={12}>
          <h4 className="ESH_main-title">TOPIC // {this.state.thistopic.topic_name}</h4>
          <div className="ESH_line" />
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={12} m={9} className="ESH_forum-col">
            <table>
              <tr className="ESH_th">
                <th className="ESH_tcol1">THREAD</th>
                <th className="ESH_tcol2">REPLIES</th>
                <th className="ESH_tcol3">FRESHNESS</th>
              </tr>

              {this.state.posts.map(post => (
                <tr>
                  <td>
                    <a href={`/forum/post/${post._id}`}>{post.post_subject}</a>
                  </td>
                  <td className="ESH_tcol2">{post.post_body}</td>
                  <td>{this.convertDate(post.post_update)}</td>
                </tr>
              ))}
            </table>
          </Grid>
          <BackBtn />
        </Grid>
        <Sidebar />
        <Chat />
      </Grid>
    );
  }
}

export default Posts;
