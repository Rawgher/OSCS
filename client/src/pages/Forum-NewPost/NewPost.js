import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import BackBtn from "../../components/BackBtn";
import ForumSidebar from "../../components/Forum-Sidebar";
import "./NewPost.css";

const NewPost = () => (
  <Container>
    <Row>
      <Col size="md-12">
        <h4 className="ESH_main-title">CREATE NEW POST</h4>
        <div className="ESH_line"></div>
      </Col>
    </Row>

    <Row>
      <Col size="md-9" className="ESH_forum-col">
        <form action="/add-a-post" method="post">
            <div className="input-field">
              <input id="post_title" type="text" name="post_title" />
              <label for="post_title">Post Title</label>
            </div>
            <div className="input-field">
              <textarea className="materialize-textarea" name="post_body"></textarea>
              <label>Description (Required)</label>
            </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" id="submit">Submit
              <i class="material-icons right">send</i>
          </button>
        </form>
        <BackBtn />
      </Col>
      <ForumSidebar/>
    </Row>
    
  </Container>
);

export default NewPost;