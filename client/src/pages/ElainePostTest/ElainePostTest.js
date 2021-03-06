import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../../components/Sidebar";
import BackBtn from "../../components/BackBtn";
import { Col, Row, Container } from "../../components/Grid";
import Chat from "../../components/Chat";
import NavTabs from "../../components/Nav";
import Background from "../../components/Background";
// import axios from "axios";
import "./ElainePostTest.css";

// TODO: change topic state to topic user clicks on

class ElainePostTest extends Component {
  //   componentDidMount() {
  //     axios
  //       .get("/api/forum/:id")
  //       .then(res => {
  //         this.setState({ posts: res.data });
  //       })
  //       .catch(err => {
  //         console.log("this is err=>", err);
  //       });
  //   }

  render() {
    return (
      <Grid container>
        <Container fluid>
          <Background />
          <Row>
            <Col size="md-12">
              <NavTabs />
            </Col>
          </Row>
        </Container>
        <Grid item xs={12}>
          <h4 className="ESH_main-title">TOPIC // Coding class </h4>
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
            <table>
              <tr className="ESH_th">
                <th className="ESH_tcol1">THREAD</th>
                <th className="ESH_tcol2">REPLIES</th>
                <th className="ESH_tcol3">FRESHNESS</th>
              </tr>
              <tr>
                <td>
                  <a href="/elainetest">This is post 1</a>
                </td>
                <td className="ESH_tcol2">20</td>
                <td>11/12/2018</td>
              </tr>
              <tr>
                <td>
                  <a href="/elainetest">Poop de scoop poop shoop whoop</a>
                </td>
                <td className="ESH_tcol2">20</td>
                <td>1/2/1995</td>
              </tr>
              <tr>
                <td>
                  <a href="/elainetest">Javascript sucks</a>
                </td>
                <td className="ESH_tcol2">20</td>
                <td>3/1/2018</td>
              </tr>
              <tr>
                <td>
                  <a href="/elainetest">I hate react sometimes</a>
                </td>
                <td className="ESH_tcol2">10</td>
                <td>10/22/2018</td>
              </tr>
            </table>
          </Grid>
          <BackBtn />
        </Grid>
        <Sidebar />
        <Chat />
      </Grid>
    );
  }
}

export default ElainePostTest;
