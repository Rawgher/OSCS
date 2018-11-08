import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import { Link } from "react-router-dom";
import { PostList } from "../../components/PostList";
import BackBtn from "../../components/BackBtn";
import "./UserPage.css";

class UserPage extends Component {
  // TODO: get correct state key-value pairs!!
  state = {
    userID: 1,
    username: "blah",
    firstName: "first",
    lastName: "last",
    email: "email@email.com"
    // userPosts,
    // userReplies,
    // favorites
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <h4 className="ESH_main-title">USER // {this.state.userID}</h4>
          <div className="ESH_line" />
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={12} m={8} className="ESH_forum-col">
            <div className="ESH_body-title">POSTS</div>
            <PostList>
              {/* TODO: find correct keys for post key-value pairing */}
              {/* {this.state.userPosts.map(post => (
                                <PostListItem key={post._id}>
                                    <Link to={`/Forum/${post._id}`}>
                                        {post.title}
                                    </Link>
                                    {post.date}
                                </PostListItem>
                            ))} */}
            </PostList>

            <div className="ESH_body-title">COMMENTS</div>
            <PostList>
              {/* TODO: find correct keys for reply key-value pairing */}
              {/* {this.state.userReplies.map(reply => (
                                <PostListItem key={reply._id}>
                                    <Link to={`/Forum/${reply.postID}`}>
                                        {reply.postTitle}
                                    </Link>
                                    {reply.message}
                                    {reply.date}
                                </PostListItem>
                            ))} */}
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
          </Grid>

          <Grid item xs={12} m={4} className="ESH_account-info">
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
          </Grid>

          <BackBtn />
        </Grid>
      </Grid>
    );
  }
}

export default UserPage;
