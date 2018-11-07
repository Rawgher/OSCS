import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BackBtn from "../../components/BackBtn";
import "../../ESH_style.css";
import "./Categories.css";

class Categories extends Component {
  // state = {
  //   topics
  // };

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={12}>
            <h4 className="ESH_main-title">FORUMS</h4>
            <div className="ESH_line" />
          </Grid>
          <Grid item s={12} m={12} className="ESH_forum-col" spacing={24}>
            <table style={{ width: 900 }}>
              <tr className="th">
                <th className="ESH_tcol1">TOPICS</th>
                <th className="ESH_tcol2">POSTS</th>
                <th className="ESH_tcol3">FRESHNESS</th>
              </tr>

              <tr>
                <td>topic here adkfjasdfij alksdjfaoids fladkjf </td>
                <td className="ESH_tcol2">20</td>
                <td>11/3/2018</td>
              </tr>
              {/* TODO: find correct keys for mapping */}
              {/* {this.state.topics.map(topic => (
                <tr>
                  <td><a href={`/Forum/${topic._id}`}>{topic.topic}</a></td>
                  <td className="ESH_tcol2">{topic.postNum}</td>
                  <td>{topic.updatedAt}</td>
                </tr>
              ))} */}
            </table>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Categories;
