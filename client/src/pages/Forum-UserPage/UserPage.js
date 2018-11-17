import React, { Component } from "react";
import axios from "axios";
import { PostList, PostListItem } from "../../components/PostList";
import { Col, Row, Container } from "../../components/Grid";
import BackBtn from "../../components/BackBtn";
import { Link } from "react-router-dom";
import "./UserPage.css";
import Background from "../../components/Background";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";


class UserPage extends Component {
  state = {
    user: [],
    favorites: []
  };

  componentDidMount() {
    axios
      .get("/api/forum/user/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log("this is err=>", err);
      });
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
              <h4 className="ESH_main-title">USER // {this.state.username}</h4>
              <div className="ESH_line" />
            </Col>
          </Row>

          <Row>
            <Col size="md-9" className="ESH_forum-col">
              <div className="ESH_body-title">POSTS</div>
              {/* <PostList>
              {this.state.user_posts.map(post => (
                <PostListItem key={post._id}>
                  <Link to={`/forum/post/${post._id}`}>
                    {post.post_subject}
                  </Link>
                  {post.updatedAt}
                </PostListItem>
              ))}
            </PostList> */}

              <div className="ESH_body-title">COMMENTS</div>
              <PostList>
                {/* TODO: find correct keys for reply key-value pairing */}
                {/* {this.state.user_replies.map(reply => (
                <PostListItem key={reply._id}>
                  <Link to={`/forum/post/${reply.postID}`}>{reply.postTitle}</Link>
                  {reply.message}
                  {reply.date}
                </PostListItem>
              ))} */}
              </PostList>

              <div className="ESH_body-title">FAVORITES</div>
              <Row>
                <Col size="md-6" className="youtube_col">
                  <div className="ESH_account-property">Youtube</div>
                  <ul>
                    <li><a href="https://youtu.be/nV5a5KihJMw">HTML Form and JavaScript onClick Event</a></li>
                  </ul>
                </Col>
                <Col size="md-6" className="stack-col">
                  <div className="ESH_account-property">Stack Overflow</div>
                  <ul>
                    <li><a href="#">javascript click event separation</a></li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col size="md-6" className="bing-col">
                  <div className="ESH_account-property">Bing</div>
                  <ul>
                    <li><a href="https://www.w3schools.com/jsref/event_onclick.asp">onclick Event - W3Schools</a></li>
                  </ul>
                </Col>
                <Col size="md-6">
                  <div className="ESH_account-property">Forum</div>
                  <ul>
                    <li><a href="/forum/post/5bf04d947261224b58cce486">APIs</a></li>
                  </ul>
                </Col>
              </Row>
              <BackBtn />
            </Col>

            <Col size="md-3" className="ESH_account-info">
              <table>
                <tbody>
                  <tr>
                    {/* TODO: check the state key-values for account info */}
                    <td className="ESH_acct-property">Username: </td>
                    <td>{this.state.user.user_name}</td>
                  </tr>
                  <tr>
                    <td className="ESH_acct-property">First Name: </td>
                    <td>{this.state.user.user_firstName}</td>
                  </tr>
                  <tr>
                    <td className="ESH_acct-property">Last Name: </td>
                    <td>{this.state.user.user_lastName}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
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

export default UserPage;
