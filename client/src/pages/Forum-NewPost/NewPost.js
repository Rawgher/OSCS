import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import axios from "axios";
import "./NewPost.css";

// TODO: set post_author to current user id
class NewPost extends Component {
  state = {
    post_title: "",
    post_body: "",
    post_author: "Curious George"
  };

  constructor() {
    super();
    this.state = {
      post_title: ""
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // ======= ELAINE ========
  //  Use this for user_id
  // {this.props.user_id}

  // fix routing for creating new post
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props.user_id, this.props.username);
    if (this.state.post_title && this.state.post_body) {
      axios
        .post({
          post_author: this.state.post_author,
          post_subject: this.state.posts_title,
          post_body: this.state.post_body
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
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
              <form>
                <div className="input-field">
                  <input
                    id="post_title"
                    type="text"
                    name="post_title"
                    value={this.state.post_title}
                    onChange={this.handleInputChange}
                    placeholder="Post Title"
                  />
                  <label for="post_title" id="textarea1" className="active">
                    Post Title
                  </label>
                </div>
                <div className="input-field">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    name="post_body"
                    placeholder="Description"
                    value={this.state.post_body}
                    onChange={this.handleInputChange}
                  />
                  <label id="textarea1" className="active">
                    Description
                  </label>
                </div>

                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  name="action"
                  id="submit"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                  <Icon style={{ marginLeft: 15 }}>send</Icon>
                </Button>
              </form>

              <BackBtn />
            </Col>

            <ForumSidebar loggedIn={this.props.loggedIn} />
          </Row>
          <Chat />
        </Container>
      </React.Fragment>
    );
  }
}

export default NewPost;
