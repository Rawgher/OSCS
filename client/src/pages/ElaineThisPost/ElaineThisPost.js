import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BackBtn from "../../components/BackBtn";
import Background from "../../components/Background";
import "./ElaineThisPost.css";

class ThisPost extends Component {
  render() {
    return (
      <div>
        <Background />
        <Grid container>
          <Grid item xs={12}>
            <h4 className="ESH_main-title">TOPIC // TOPIC NAME HERE // POST</h4>
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
                This is my posts title
                <i>11/13/2018</i>
                <p className="ESH_padding">
                  this is a long string of stuff caues this is my question. i
                  spelt stuff wrong in the first sentence. that shows my
                  attention to detail
                </p>
              </div>

              <div className="ESH_body-title">COMMENTS (5000)</div>

              <ul class="ESH_user-posts">
                <li>
                  this is a dumb comment
                  <i>on 12/12/1993</i>
                  <i>
                    by <a href="/elainethispost"> Elaine</a>
                  </i>
                </li>
                <li>
                  this is an even worse comment
                  <i>on 2/10/2015</i>
                  <i>
                    by <a href="/elainethispost"> enea</a>
                  </i>
                </li>
                <li>
                  blah blah blah blah blah blah blah, blah blah blah... blah
                  blah
                  <i>on 1/14/2013</i>
                  <i>
                    by <a href="/elainethispost"> collin</a>
                  </i>
                </li>
                <li>
                  shut up collin
                  <i>on 12/19/2094</i>
                  <i>
                    by <a href="/elainethispost"> enea</a>
                  </i>
                </li>
              </ul>

              <form>
                <div className="input-field">
                  <textarea
                    id="textarea1"
                    placeholder="Write your comment here."
                    class="materialize-textarea"
                    name="replyBody"
                  />
                  <label id="textarea1" />
                </div>
                <button
                  class="btn waves-effect waves-light comment-submit"
                  type="submit"
                  name="action"
                  id="submit"
                >
                  Submit
                  <i class="material-icons right">send</i>
                </button>
              </form>

              <BackBtn />
            </Grid>
          </Grid>

          {/* <Sidebar /> */}
        </Grid>
      </div>
    );
  }
}

export default ThisPost;
