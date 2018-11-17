import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import BackBtn from "../../components/BackBtn";
import Background from "../../components/Background";
import { Col, Row, Container } from "../../components/Grid";
import ForumSidebar from "../../components/Forum-Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import "./ThisPost.css";

class ThisPost extends Component {
  state = {
    thispost: [],
    replies: []
  };

  componentDidMount() {
    axios
      // post route
      .get("/api/forum/post/" + this.props.match.params.id)
      .then(res => {
        console.log("res: " + res);
return;
        this.setState({ replies: res.data });
        console.log("post route for thispost working!");
      })
      .catch(err => {
        console.log("this is err=>", err);
      });

    axios
      .get("/api/forum/postinfo/" + this.props.match.params.id)
      .then(res => {
        this.setState({ thispost: res.data })
      })
      .catch(err => {
        console.log("this is err=>", err);
      });
  }

  convertDate(theDate) {
    var d = new Date(theDate);
    return d.toLocaleDateString().replace(/\//g, '-');
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // TODO: NOT WORKING
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.replies.reply_content && this.props.user_id) {
      axios
        .post("/api/forum/post/" + this.state.replies._id, {
          reply_author: this.props.user_id,
          reply_content: this.state.replies.reply_content,
          reply_post: this.state.thispost.post_topic
        })
        .then(function (res) {
          // TODO: change routing!!!
          console.log("it worked");
          res.redirect(`/forum/${this.state.thispost._id}`);
        })
        .catch(
          err => console.log(err)
        );
    }
  }

  render() {
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
              <h4 className="ESH_main-title">{this.state.thispost.post_topic} // {this.state.thispost.post_subject}</h4>
              <div className="ESH_line" />
            </Col>
          </Row>

          <Row>
            <Col size="md-9" className="ESH_forum-col">
              <div className="ESH_body-title">
                <b>{this.state.thispost.post_subject}</b>
                <div style={{ fontStyle: 'italic' }}>{this.convertDate(this.state.thispost.post_update)}</div>
              </div>
              <p className="ESH_padding">
                {this.state.thispost.post_body}
              </p>

              <div className="ESH_body-title">COMMENTS</div>

              <ul class="ESH_user-posts">
              {this.state.replies.map(reply => (
                <li>
                  {reply.reply_content}
                  <div className="ESH_comment-detail">
                    on {reply.reply_update} by <a href={`/forum/user/${reply.reply_author}`}></a>
                  </div>
                </li>
              ))}
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

            <ForumSidebar loggedIn={this.props.loggedIn} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ThisPost;