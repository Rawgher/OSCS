import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Sidebar from "../../components/Sidebar";
import "./Categories.css";

class Categories extends Component {
  state = {
    topics
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <h4 className="ESH_main-title">FORUMS</h4>
          <div className="ESH_line"></div>
        </Grid>

        <Grid container direction="row"
          justify="center"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={12} m={9} className="ESH_forum-col">
            <table>
              <tr className="ESH_th">
                <th className="ESH_tcol1">TOPICS</th>
                <th className="ESH_tcol2">POSTS</th>
                <th className="ESH_tcol3">FRESHNESS</th>
              </tr>
              
              {/* TODO: find correct keys for mapping */}
              {this.state.topics.map(topic => (
                <tr>
                  <td><a href={`/Forum/${topic._id}`}>{topic.topic}</a></td>
                  <td className="ESH_tcol2">{topic.postNum}</td>
                  <td>{topic.updatedAt}</td>
                </tr>
              ))}
            </table>
          </Grid>

          <Sidebar/>
          
        </Grid>
      </Grid>
    );
  };
};

export default Categories;
