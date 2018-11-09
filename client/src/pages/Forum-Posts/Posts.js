import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../../components/Sidebar";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import "./Posts.css";

class Posts extends Component {
  state = {
    // TODO: change topic state to topic user clicks on
    topic: "HTML"
    //posts,
  };

  render() {
    return (
      <Grid container>
        <Container fluid>
          <Background />
          <Row>
            <Col size="md-12">
              <NavTabs auth={this.props.auth} />
            </Col>
          </Row>
        </Container>
        <Grid item xs={12}>
          <h4 className="ESH_main-title">TOPIC // {this.state.topic}</h4>
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

              {/* TODO: find correct keys for mapping */}
              {/* {this.state.posts.map(post => (
                <tr>
                  <td><a href={`/Forum/${post._id}`}>{post.title}</a></td>
                  <td className="ESH_tcol2">{post.postNum}</td>
                  <td>{post.updatedAt}</td>
                </tr>
              ))} */}
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
