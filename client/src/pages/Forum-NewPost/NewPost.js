import React from "react";
import Grid from "@material-ui/core/Grid";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import "./NewPost.css";

const NewPost = (props) => (
  <Grid container>
    <Container fluid>
      <Background />
      <Row>
        <Col size="md-12">
          <NavTabs />
        </Col>
      </Row>
    </Container>

    <Grid item xs={12}>
      <h4 className="ESH_main-title">CREATE NEW POST</h4>
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
        <form className="col s12" action="/add-a-post" method="post">
          <div className="input-field col-sm-12">
            <input id="post_title" type="text" name="post_title" />
            <label for="post_title" id="textarea1">
              Post Title
            </label>
          </div>
          <div className="input-field col-sm-12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              name="post_body"
            />
            <label id="textarea1">Description (Required)</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="submit"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </Grid>
      <BackBtn />
    </Grid>
    <Sidebar />
    <Chat />
  </Grid>
);

export default NewPost;
