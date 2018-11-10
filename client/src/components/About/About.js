import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import TheTeam from "../../utils/TheTeam.json";
import "./About.css";

class About extends React.Component {
  state = {
    TheTeam
  };

  render() {
    return (
      <Container id="EGA-aboutPageContainer">
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <div id="EGA-aboutSite">
              <h1 id="EGA-aboutSiteTitle">About the Site</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12 sm-12 xs-6">
            <div id="EGA-teamContainer">
              <h1 id="EGA-aboutTeamTitle">The Team</h1>
              <div id="EGA-cardContainer">
                {this.state.TheTeam.map(TheTeam => (
                  <Card
                    id={TheTeam.id}
                    key={TheTeam.id}
                    image={TheTeam.image}
                    name={TheTeam.name}
                    description={TheTeam.description}
                    githubURL={TheTeam.githubURL}
                    linkedInURL={TheTeam.linkedInURL}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-6">
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
