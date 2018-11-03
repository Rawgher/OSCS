import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Sidebar from "../../components/Sidebar";
import BackBtn from "../../components/BackBtn";
import NavTabs from "../../components/Nav";
import "./Categories.css";

class Categories extends Component {
  // state = {
  //   topics
  // };

  render() {
    return (
      <div>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={24}>
          <NavTabs />
          <Grid item xs={12}>
            <h4 className="ESH_main-title" style={{ marginTop: 70 }}>FORUMS</h4>
            <div className="ESH_line"></div>
          </Grid>
          <Grid item s={12} m={9} className="ESH_forum-col" spacing={40}>
            <table>
              <tr className="th">
                <th className="ESH_tcol1">TOPICS</th>
                <th className="ESH_tcol2">POSTS</th>
                <th className="ESH_tcol3">FRESHNESS</th>
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
        <BackBtn />
      </div>
    );
  };
};

export default Categories;
