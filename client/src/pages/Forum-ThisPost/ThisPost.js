import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BackBtn from "../../components/BackBtn";
import "./ThisPost.css";

class ThisPost extends Component {
  state = {
    topic: "HTML"
    // post,
    // comments
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <h4 className="ESH_main-title">
            TOPIC // {this.state.topic} // POST
          </h4>
          <div className="ESH_line" />
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={12} m={9} className="ESH_forum-col">
            <div className="ESH_body-title">
              {this.state.post.title}
              <i>{this.state.post.updatedAt}</i>
              <p className="ESH_padding">{this.state.post.body}</p>
            </div>

            <div className="ESH_body-title">
              COMMENTS ({this.state.post.commentNum})
            </div>

            <ul class="ESH_user-posts">
              {/* TODO: find correct keys for mapping */}
              {/* {this.state.comments.map(comment => (
                <li>
                  {comment.body}
                  <i>on {comment.updatedAt}</i>
                  <i>by <a href="/forum/user/${user._id}"> {comment.author}</a></i>
                </li>
              ))} */}
            </ul>

            {/* <form action={`/Forum/${this.state.post._id}`} method="post">
                <div className="input-field">
                    <textarea id="textarea1" placeholder="Write your comment here." class="materialize-textarea"
                        name="replyBody"></textarea>
                    <label id="textarea1"></label>
                </div>
                <button class="btn waves-effect waves-light comment-submit" type="submit" name="action" id="submit">Submit
                    <i class="material-icons right">send</i>
                </button>
            </form> */}

            <BackBtn />
          </Grid>
        </Grid>

        {/* <Sidebar /> */}
      </Grid>
    );
  }
}

export default ThisPost;
