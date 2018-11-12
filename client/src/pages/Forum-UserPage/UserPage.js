import React, { Component } from "react";
import axios from "axios";
import { PostList, PostListItem } from "../../components/PostList";
import { Col, Row, Container } from "../../components/Grid";
import BackBtn from "../../components/BackBtn";
import "./UserPage.css";

class UserPage extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios
      .get("/api/forum/userpage")
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
                  <a href={`/forum/${post._id}`}>
                    {post.post_subject}
                  </a>
                  {post.updatedAt}
                </PostListItem>
              ))}
            </PostList>

            <div className="ESH_body-title">COMMENTS</div>
            <PostList>
              {/* TODO: find correct keys for reply key-value pairing */}
              {this.state.user_replies.map(reply => (
                <PostListItem key={reply._id}>
                  <a href={`/forum/${reply.postID}`}>
                    {reply.postTitle}
                  </a>
                  {reply.message}
                  {reply.date}
                </PostListItem>
              ))}
            </PostList>

            <div className="ESH_body-title">FAVORITES</div>
            <PostList>
              {/* TODO: find correct keys for favorites key-value pairing */}
              {/* {this.state.favorites.map(fav => (
                                <PostListItem key={fav._id}>
                                    <Link to={fav.type == "forum" ? `/Forum/${fav.postID}` : fav.url}>
                                        {fav.title}
                                    </Link>
                                    {fav.teaser}
                                </PostListItem>
                            ))} */}
            </PostList>
            <BackBtn />
          </Col>

          <Col size="md-3" className="ESH_account-info">
            <table>
              <tbody>
                <tr>
                  {/* TODO: check the state key-values for account info */}
                  <td className="ESH_acct-property">Username: </td>
                  <td>{this.state.username}</td>
                </tr>
                <tr>
                  <td className="ESH_acct-property">First Name: </td>
                  <td>{this.state.firstName}</td>
                </tr>
                <tr>
                  <td className="ESH_acct-property">Last Name: </td>
                  <td>{this.state.lastName}</td>
                </tr>
                <tr>
                  <td className="ESH_acct-property">Email: </td>
                  <td>{this.state.email}</td>
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
