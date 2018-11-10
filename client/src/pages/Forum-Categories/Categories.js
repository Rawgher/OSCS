import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import BackBtn from "../../components/BackBtn";
import axios from "axios";
import "../../ESH_style.css";
import "./Categories.css";
import { Col, Row, Container } from "../../components/Grid";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";

class Categories extends Component {
  state = {
    topics: []
  };

  componentDidMount(){
    axios.get('/api/forum/categories').then(res=>{
      this.setState({topics: res.data});
    }).catch(err=>{
      console.log("this is err=>", err);
    })
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Background />
          <Row>
            <Col size="md-12">
              <NavTabs auth={this.props.auth} />
            </Col>
          </Row>
        </Container>
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
              {this.state.topics.map(topic => (
                <tr>
                  <td><a href={`/forum/${topic.topic_name}`}>{topic.topic_name}</a></td>
                  <td className="ESH_tcol2">{topic.topic_posts}</td>
                  <td>{topic.updatedAt}</td>
                </tr>
              ))}
            </table>
          </Grid>
        </Grid>
        <Sidebar />
        <Chat />
      </div>
    );
  }
}

export default Categories;
