import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import "./NewPost.css";

// TODO: set post_author to current user id
class NewPost extends Component {
  state = {
    post_title: "",
    post_body: "",
    post_author: ""
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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props.user_id, this.props.username);
    if (this.state.post_title && this.state.post_body) {
      axios
        .post({
          post_author: this.props.user_id,
          post_subject: this.state.posts_title,
          post_body: this.state.post_body
        })
        .then(function (res) {
          // TODO: change routing!!!
          res.redirect(`/posts/${res._id}`);
        })
        .catch(
          err => console.log(err)
        );
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
                  <select className="browser-default" id="topic_name" name="topic_name">
                    <option value="" disabled selected>Choose Topic</option>
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">Javascript</option>
                    <option value="4">API/AJAX</option>
                    <option value="5">mySQL</option>
                  </select>
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
