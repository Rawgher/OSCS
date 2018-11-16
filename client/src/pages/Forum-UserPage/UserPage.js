import React, { Component } from "react";
import axios from "axios";
import { PostList, PostListItem } from "../../components/PostList";
import { Col, Row, Container } from "../../components/Grid";
import BackBtn from "../../components/BackBtn";
import "./UserPage.css";

class UserPage extends Component {
  state = {
    user: [],
    favorites: []
  };

  componentDidMount() {
    axios
      .get("/api/forum/user/:id")
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
            <PostList>
              {this.state.user_posts.map(post => (
                <PostListItem key={post._id}>
                  <a href={`/forum/post/${post._id}`}>{post.post_subject}</a>
                  {post.updatedAt}
                </PostListItem>
              ))}
            </PostList>

            <div className="ESH_body-title">COMMENTS</div>
            <PostList>
              {/* TODO: find correct keys for reply key-value pairing */}
              {/* {this.state.user_replies.map(reply => (
                <PostListItem key={reply._id}>
                  <a href={`/forum/post/${reply.postID}`}>{reply.postTitle}</a>
                  {reply.message}
                  {reply.date}
                </PostListItem>
              ))} */}
            </PostList>

            <div className="ESH_body-title">FAVORITES</div>
            <Row>
              <Col size="md-6">
                <div className="ESH_account-property">Youtube</div>

              </Col>
              <Col size="md-6">
                <div className="ESH_account-property">Stack Overflow</div>

              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <div className="ESH_account-property">Bing</div>

              </Col>
              <Col size="md-6">
                <div className="ESH_account-property">Forum</div>

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
      </Container>
    );
  }
}

export default UserPage;
