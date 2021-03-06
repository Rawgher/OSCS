import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import BackBtn from "../../components/BackBtn";
import Background from "../../components/Background";
import { Col, Row, Container } from "../../components/Grid";
import "./ElaineThisPost.css";
import "../../ESH_style.css";

class ThisPost extends Component {
  state = {
    post: [],
    replies: []
  };

  componentDidMount() {
    axios
      .get("/api/forum/post")
      .then(res => {
        this.setState({ post: res.data });
      });

    axios
      .get("/api/forum/")
      .then(res => {
        this.setState({ replies: res.data });
      });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.post_title && this.state.post_body) {
      axios
        .post("/api/forum/posts", {
          post_author: this.props.user_id,
          post_subject: this.state.post_title,
          post_body: this.state.post_body,
          post_topic: this.state.post_topic
        })
        .then(function (res) {
          // TODO: change routing!!!
          console.log("it worked");
          res.redirect(`/forum/${this.state.post_id}`);
        })
        .catch(
          err => console.log(err)
        );
    }
  }

  render() {
    const title = this.state.post.post_subject;

    return (
      <React.Fragment>
        <Background />
        <Container>
          <Row>
            <Col size="md-12">
              <h4 className="ESH_main-title">{this.state.post.post_topic}HTML // {title}title</h4>
              <div className="ESH_line" />
            </Col>
          </Row>

          <Row>
            <Col size="md-9" className="ESH_forum-col">
              <div className="ESH_body-title">
                <b>{title}This is my posts title</b>
                <div style={{ fontStyle: 'italic' }}>{this.state.post.updatedAt}11/13/2018</div>
              </div>
              <p className="ESH_padding">
                this is a long string of stuff caues this is my question. i spelt stuff wrong in the first sentence. that shows my attention to detail
                </p>

              <div className="ESH_body-title">COMMENTS</div>

              <ul class="ESH_user-posts">
                <li>
                  this is a dumb comment
                  <div className="ESH_comment-detail">
                    on 12/12/1993 by <a href="/elainethispost">{this.state.post.post_author}Elaine</a>
                  </div>
                </li>
                <li>
                  this is an even worse comment
                  <div className="ESH_comment-detail">
                    on 12/12/1993 by <a href="/elainethispost">{this.state.post.post_author}Elaine</a>
                  </div>
                </li>
                <li>
                  blah blah blah blah blah blah blah, blah blah blah... blah
                  blah
                  <div className="ESH_comment-detail">
                    on 12/12/1993 by <a href="/elainethispost">{this.state.post.post_author}Elaine</a>
                  </div>
                </li>
                <li>
                  shut up collin
                  <div className="ESH_comment-detail">
                    on 12/12/1993 by <a href="/elainethispost">{this.state.post.post_author}Elaine</a>
                  </div>
                </li>
              </ul>

              <form>
                <div className="input-field">
                  <textarea
                    id="textarea1"
                    placeholder="Write your comment here."
                    class="materialize-textarea"
                    name="replyBody"
                    value={this.state.post_body}
                    onChange={this.handleInputChange}
                  />
                  <label id="textarea1" />
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
          </Row>

          {/* <Sidebar /> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default ThisPost;
