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
          <Col size="md-12">
            <div id="EGA-aboutSite">
              <h1 id="EGA-aboutSiteTitle">About the Site</h1>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1 id="EGA-aboutTeamTitle">The Team</h1>
          </Col>
          {this.state.TheTeam.map(TheTeam => (
            <Col size="md-4 sm-4 xs-4">
              <div id="EGA-teamContainer">
                <div id="EGA-cardContainer">
                  <Card
                    id={TheTeam.id}
                    key={TheTeam.id}
                    image={TheTeam.image}
                    name={TheTeam.name}
                    description={TheTeam.description}
                    githubURL={TheTeam.githubURL}
                    linkedInURL={TheTeam.linkedInURL}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-12">
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
