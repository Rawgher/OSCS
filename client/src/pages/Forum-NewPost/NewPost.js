import React from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import "./NewPost.css";

const NewPost = () => (
  <React.Fragment>
    <Container fluid>
      <Background />
      <Row>
        <Col size="md-12">
          <NavTabs />
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col size="md-12">
          <h4 className="ESH_main-title">CREATE NEW POST</h4>
          <div className="ESH_line" />
        </Col>
      </Row>

      <Row>
        <Col size="md-9" className="ESH_forum-col">
          <form action="/add-a-post" method="post">
            <div className="input-field">
              <input id="post_title" type="text" name="post_title" />
              <label for="post_title" id="textarea1">
                Post Title
            </label>
            </div>
            <div className="input-field">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                name="post_body"
              />
              <label id="textarea1">Description (Required)</label>
            </div>
            <Button variant="contained" size="large" color="primary" type="submit" name="action" id="submit">
              Submit
              <Icon> send</Icon>
            </Button>
          </form>

          <BackBtn />

        </Col>

        <ForumSidebar />

      </Row>
      <Chat />
    </Container>
  </React.Fragment>
);

export default NewPost;