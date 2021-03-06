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
import Sidebar from "../../components/Sidebar";
import "./NewPost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      post_id: "",
      post_title: "",
      post_body: "",
      post_topic: "",
      redirect: false
    };
  }

  // componentDidMount() {
  //   this.props.getUser();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  routeChange = () => {
    this.setState({
      redirect: true
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.props.user_id, this.props.username);
    // if (this.state.post.post_title && this.state.post.post_body) {
    axios
      .post("/api/forum/newpost", {
        post_author: this.props.username,
        post_subject: this.state.post_title,
        post_body: this.state.post_body,
        post_topic: this.state.post_topic
      })
      .then(res => {
        this.setState({ post_id: res.data._id });
      })
      .then(() => {
        this.routeChange();
      })
      .catch(err => console.log(err));
    // }
  };

  render() {
    const route = `/forum/post/${this.state.post_id}`;

    if (this.state.redirect) {
      return <Redirect to={route} />;
    } else {
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
                    <select
                      className="browser-default"
                      id="post_topic"
                      name="post_topic"
                      onChange={this.handleInputChange.bind(this)}
                    >
                      <option value="" disabled selected>
                        Choose Topic
                      </option>
                      <option value="HTML">HTML</option>
                      <option value="CSS">CSS</option>
                      <option value="Javascript">Javascript</option>
                      <option value="API AJAX">API/AJAX</option>
                      <option value="mySQL">mySQL</option>
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
            <Sidebar
              loggedIn={this.props.loggedIn}
              username={this.props.username}
            />
            <Chat
              loggedIn={this.props.loggedIn}
              user={this.props.user}
              uid={this.props.user_id}
            />
          </Container>
        </React.Fragment>
      );
    }
  }
}

export default NewPost;
