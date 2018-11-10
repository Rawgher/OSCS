import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    post_title: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // fix routing for creating new post
  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

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
                  />
                  <label id="textarea1" className="active">Description</label>
                </div>

                <Button variant="contained" size="large" color="primary" type="submit" name="action" id="submit" onClick={this.handleFormSubmit}>
                  Submit
                  <Icon style={{ marginLeft: 15 }}>send</Icon>
                </Button>
              </form>

              <BackBtn />

            </Col>

            <ForumSidebar />

          </Row>
          <Chat />
        </Container>
      </React.Fragment>
    )
  }
};

export default NewPost;